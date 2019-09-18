<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <ToggleThemeButton />
          <LoginForm />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div v-if="error" class="alert alert-danger mt-4" role="alert">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
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
