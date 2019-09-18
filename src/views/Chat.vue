<template>
  <div class="chatroom">
    <ToggleThemeButton />
    <div class="container">
      <div class="row vh-25">
        <div class="col mt-3">
          <a :href="repo" target="_blank"
            ><span id="title">{{ prettyPrintRepo }}</span></a
          >
        </div>
      </div>
      <div class="row vh-50">
        <div class="col-sm-6 text-left">
          <MsgContainer :repo="this.repo" />
        </div>
        <div class="col-sm-6 text-left">
          <div class="d-sm-none"><hr /></div>
          <GithubEventContainer :repo="this.repo" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <SendMessage :username="this.username" :repo="this.repo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgContainer from "@/components/MsgContainer.vue";
import GithubEventContainer from "@/components/GithubEventContainer.vue";
import SendMessage from "@/components/SendMessage.vue";
import ToggleThemeButton from "@/components/ToggleThemeButton.vue";

export default {
  components: {
    MsgContainer,
    GithubEventContainer,
    SendMessage,
    ToggleThemeButton
  },
  props: {
    username: String,
    repo: String
  },
  computed: {
    prettyPrintRepo: function() {
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
    padding: 1rem;
    font-size: 1.5rem;
  }
}
</style>
