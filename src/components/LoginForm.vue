<template>
  <div class="container">
    <h1 class="mt-3">Github Chat</h1>
    <form @submit="handleSubmit">
      <div class="form-group">
        <input v-model="username" type="text" placeholder="username" />
      </div>
      <div class="form-group">
        <input v-model="repo" type="text" placeholder="https://github.com/user/repo" />
      </div>
      <div>
        <button :disabled="isValid" class="btn btn-primary" type="submit">Enter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: function() {
    return {
      username: "",
      repo: ""
    };
  },
  computed: {
    isValid() {
      return !(this.username.trim().length > 0 && this.repo.trim().length > 0);
    }
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      this.$router.push({
        name: "chat",
        params: { username: this.username, repo: this.repo }
      });
    }
  }
};
</script>

<style scoped>
input, button {
  min-width: 20rem;
}
</style>
