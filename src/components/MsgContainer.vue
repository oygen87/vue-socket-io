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
    repo: String
  },
  data: function() {
    return {
      messages: [],
      socket: null
    };
  },
  methods: {
    fetchData() {
      fetch(`${process.env.VUE_APP_URL}/messages/`, {
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
    },
    setupSocketListener() {
      this.socket = io(`${process.env.VUE_APP_URL}`);
      this.socket.on(`serverMessageEvent:${this.repo}`, data => {
        this.messages = data;
      });
    }
  },
  mounted() {
    this.fetchData();
    this.setupSocketListener();
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
  margin-top: 2rem;
}
@media only screen and (max-width: 576px) {
  .msgbox-container {
    height: 40vh;
    margin-top: 1rem;
  }
}
</style>
