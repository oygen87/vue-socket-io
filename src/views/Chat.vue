<template>
  <div class="chatroom">
    <div class="container">
      <div class="row vh-25">
        <div class="col mb-2">
          <span id="title">{{ repo }}</span>
        </div>
      </div>
      <div class="row vh-50">
        <div class="col-sm-6 text-left">
          <MsgBox :socket="this.socket" :repo="this.repo" />
        </div>
        <div class="col-sm-6 text-left">
          <div class="d-sm-none"><hr/></div>
          <GithubEvents :repo="this.repo"/>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <FormComponent :username="this.username" :socket="this.socket" :repo="this.repo" />
        </div>
      </div>
    </div>
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
#title {
    font-size: 2rem;
  }
@media only screen and (max-width: 576px) {
  #title {
      font-size: 1rem;
      padding: 1rem;
    }
}
</style>
