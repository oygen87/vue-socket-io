<template>
  <div class="github-events-container" v-bind:class="{ 'new-events': newEvents }">
    <span v-if="isLoading">loading ...</span>
    <div v-bind:key="e.id" v-for="e in events">
      <GithubEvent :event="e" />
    </div>
  </div>
</template>

<script>
import GithubEvent from "@/components/GithubEvent";

export default {
  components: {
    GithubEvent
  },
  props: {
    repo: String
  },
  data: function() {
    return {
      events: [],
      isLoading: true,
      pollInterval: null,
      newEvents: false
    };
  },
  methods: {
    fetchData() {
      fetch(`http://localhost:4000/github-events/`, {
        method: "POST",
        body: JSON.stringify({ repo: this.repo }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          if (res.ok) {
            res.json().then(events => {
              if (
                this.events.length > 0 &&
                JSON.stringify(this.events) !== JSON.stringify(events)
              ) {
                this.newEvents = true;
                setTimeout(() => (this.newEvents = false), 2000);
              } else {
                this.newEvents = false;
              }

              this.events = events;
            });
          } else {
            this.navigateTo("home", {
              error: "Repository is private or not found"
            });
          }
        })
        .catch(() => {
          this.navigateTo("home", { error: "Internal server error" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    navigateTo(name, params) {
      this.$router.push({
        name,
        params
      });
    }
  },
  mounted() {
    this.fetchData();
    this.pollInterval = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      20000
    );
  },
  beforeDestroy() {
    clearInterval(this.pollInterval);
  }
};
</script>

<style scoped>
.github-events-container {
  height: 80vh;
  overflow-y: scroll;
}
.new-events {
  animation-name: animation-new-events;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}
@media only screen and (max-width: 576px) {
  .github-events-container {
    height: 40vh;
    padding: 1rem;
  }
}
@keyframes animation-new-events {
  0% {
    background-color: #fff !important;
  }
  50.0% {
    background-color: #d4ffd4;
  }
  100.0% {
    background-color: #fff !important;
  }
}
</style>