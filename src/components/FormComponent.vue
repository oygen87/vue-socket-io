<template>
  <div>
    <form @submit="handleSubmit">
      <input v-model="message" type="text" placeholder="Say something..." />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    repo: String,
    socket: Object,
  },
  data: function() {
    return {
      message: ""
    };
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      this.socket.emit("clientMessageEvent", {repo: this.repo, message: this.message, username: this.username});
      this.message = "";
    },
  }
};
</script>

<style scoped>
input {
  margin-top: 1rem;
}
</style>