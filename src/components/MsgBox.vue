<template>
  <div class="msgbox-container" ref="msgbox">
    <div v-bind:key="msg.id" v-for="msg in messages">
      <strong>{{ msg.username }} :</strong>
      <span>{{ msg.message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: String,
    socket: Object
  },
  data: function() {
    return {
      messages: []
    };
  },
  mounted() {
    fetch(`http://localhost:4000/messages/`, {
      method: "POST",
      body: JSON.stringify({ repo: this.repo }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        res.json().then(r => {
          this.messages = r.data;
        });
      })
      .catch();

    this.socket.on(`serverMessageEvent:${this.repo}`, data => {
      this.messages = data;
    });
  },
  updated() {
    this.$refs.msgbox.scrollTop = this.$refs.msgbox.scrollHeight;
  }
};
</script>

<style scoped>
h1 {
  border: 1px solid red;
}
.msgbox-container {
  height: 80vh;
  overflow-y: scroll;
}
</style>