<template>
  <div class="chatroom">
    <h3>{{ repo }}</h3>
    <div class="row">
      <div class="col">
        <MsgBox :socket="this.socket" :repo="this.repo" />
      </div>
      <div class="col">
        <GithubEvents :repo="this.repo"/>
      </div>
    </div>
    <FormComponent :username="this.username" :socket="this.socket" :repo="this.repo" />
  </div>
</template>

<script>
import io from "socket.io-client";

import MsgBox from "@/components/MsgBox.vue";
import GithubEvents from "@/components/GithubEvents.vue";
import FormComponent from "@/components/FormComponent.vue";

export default {
  components: {
    MsgBox,
    GithubEvents,
    FormComponent
  },
  props: {
    username: String,
    repo: String
  },
  data: function() {
    return {
      socket: io("localhost:4000")
    };
  }
};
</script>

<style scoped>
</style>
