<template>
  <div class="chatroom">
    <div class="container">
      <div class="row vh-25">
        <div class="col mb-2">
          <a :href="repo" target="_blank"><span id="title">{{ prettyPrintRepo }}</span></a>
        </div>
      </div>
      <div class="row vh-50">
        <div class="col-sm-6 text-left">
          <MsgContainer :socket="this.socket" :repo="this.repo" />
        </div>
        <div class="col-sm-6 text-left">
          <div class="d-sm-none"><hr/></div>
          <GithubEventContainer :repo="this.repo"/>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <SendMessage :username="this.username" :socket="this.socket" :repo="this.repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

import MsgContainer from "@/components/MsgContainer.vue";
import GithubEventContainer from "@/components/GithubEventContainer.vue";
import SendMessage from "@/components/SendMessage.vue";

export default {
  components: {
    MsgContainer,
    GithubEventContainer,
    SendMessage
  },
  props: {
    username: String,
    repo: String
  },
  data: function() {
    return {
      socket: io("localhost:4000")
    };
  },
  computed: {
    prettyPrintRepo: function() {
      return this.repo.split("github.com/")[1];
    }
  }
};
</script>

<style scoped>
#title {
    font-size: 2rem;
  }
  a {
    color: black;
  }
@media only screen and (max-width: 576px) {
  #title {
      font-size: 1rem;
      padding: 1rem;
    }
}
</style>
