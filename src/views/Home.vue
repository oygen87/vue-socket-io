<template>
  <div class="home">
    <ToggleThemeButton />
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import ToggleThemeButton from "@/components/ToggleThemeButton.vue";

export default {
  name: "home",
  components: {
    LoginForm,
    ToggleThemeButton
  },
  props: {
    error: String
  }
};
</script>
