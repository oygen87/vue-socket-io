<template>
  <div class="home">
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "home",
  components: {
    LoginForm
  },
  props: {
    error: String,
  }
};
</script>
