<template>
  <div class="chatroom">
    <h3>{{ repo }}</h3>
    <MsgBox :socket="this.socket" :repo="this.repo" />
    <FormComponent :username="this.username" :socket="this.socket" :repo="this.repo"/>
  </div>
</template>

<script>
import io from 'socket.io-client';

import MsgBox from "@/components/MsgBox.vue"
import FormComponent from "@/components/FormComponent.vue"

export default {
  components: {
    MsgBox,
    FormComponent
  },
  props: {
    username: String,
    repo: String,
  },
  data: function() {
    return {
      socket : io('localhost:4000')
    }
  }
};
</script>
