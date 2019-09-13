<template>
  <div class="container">
    <h1>Github Chat</h1>
    <form @submit="handleSubmit">
      <div class="form-group">
        <input v-model="username" type="text" placeholder="username" />
      </div>
      <div class="form-group">
        <input v-model="repo" type="text" placeholder="https://github.com/user/repo" />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Enter</button>
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
