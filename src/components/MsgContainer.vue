<template>
  <div class="msgbox-container" ref="msgbox">
    <div v-bind:key="msg.id" v-for="msg in messages">
      <Msg :username="msg.username" :message="msg.message" />
    </div>
  </div>
</template>

<script>
import Msg from "@/components/Msg";
import io from "socket.io-client";

export default {
  components: {
    Msg
  },
  props: {
    repo: String,
  },
  data: function() {
    return {
      messages: [],
      socket: io("http://localhost:4000")
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
  },
  beforeDestroy() {
    this.socket.disconnect();
  }
};
</script>

<style scoped>
h1 {
  border: 1px solid red;
}
.msgbox-container {
  height: 80vh;
  width: 100%;
  display: inline-block;
  overflow-y: scroll;
  text-align: left;
}
@media only screen and (max-width: 576px) {
  .msgbox-container {
    height: 40vh;
    padding: 1rem;
  }
}
</style>
