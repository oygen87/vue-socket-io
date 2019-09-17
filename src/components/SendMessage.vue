<template>
  <div>
    <form @submit="handleSubmit">
      <input v-model="message" type="text" placeholder="Say something..." />
    </form>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  props: {
    username: String,
    repo: String,
  },
  data: function() {
    return {
      message: "",
      socket: io("http://localhost:4000")
    };
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      this.socket.emit("clientMessageEvent", {
        repo: this.repo,
        message: this.message,
        username: this.username
      });
      this.message = "";
    }
  },
  beforeDestroy() {
    this.socket.disconnect();
  }
};
</script>

<style scoped>
form {
  height: 100%;
}
input {
  width: 100%;
  padding: 1rem;
  border: 0 !important;
}
div {
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
}
</style>
