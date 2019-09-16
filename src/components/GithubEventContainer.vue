<template>
  <div class="github-events-container">
    <span v-if="isLoading">loading ...</span>
    <div v-bind:key="e.id" v-for="e in events">
      <GithubEvent :event="e"/>
    </div>
  </div>
</template>

<script>
import GithubEvent from "@/components/GithubEvent";

export default {
  components: {
    GithubEvent,
  },
  props: {
    repo: String
  },
  data: function() {
    return {
      events: [],
      isLoading: true,
      pollInterval: null
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
              this.events = events;
            });
          } else {
            res.text().then(text => {
              this.$router.push({
              name: "home",
              params: { error: "Repository not found" }
              });
            });
          }
        })
        .catch(e => {
          this.$router.push({
              name: "home",
              params: { error: "Internal server error" }
              });
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.fetchData();
    this.pollInterval = setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      10000
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
@media only screen and (max-width: 576px) {
  .github-events-container {
    height: 40vh;
    padding: 1rem;
  }
}
</style>