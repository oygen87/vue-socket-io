<template>
  <div class="github-events-container">
    <span v-if="isLoading">loading ...</span>
    <div v-bind:key="e.id" v-for="e in events">
        <small>{{ dateTime(e.created) }} </small>
        <a :href="e.url" target="_blank">
            <span><img :src="e.avatar" /></span>
            <small class="ml-1"> {{ e.actor }} {{ e.action }} {{ e.type }}</small>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        repo: String,
    },
    data: function() {
        return {
            events: [],
            isLoading: true,
        }
    },
    methods: {
        dateTime : (date) => {
            const today = new Date().getTime();
            const created = new Date(date).getTime();
            const diff = today - created - 86400000;
            if (diff <= 0) {
                return new Date(date).toLocaleTimeString();
            }
            return new Date(date).toLocaleDateString();
        }
    },
    mounted() {
        fetch(`http://localhost:4000/github-events/`, {
      method: "POST",
      body: JSON.stringify({ repo: this.repo }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        res.json().then(events => {
          this.events = events;
          this.isLoading = false;
        });
      })
      .catch(() => {
          this.isLoading = false;
      });
    },
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
img {
    max-height: 24px;
    border-radius: 50%;
}
</style>