<template>
  <span @click="handleToggle" >{{ icon() }}</span>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["theme"]),
  methods: {
    handleToggle() {
      this.$store.dispatch("toggleTheme");
    },
    icon() {
        return this.theme === "light" ? "🕶️" : "💡";
      }
  }
};
</script>

<style scoped>
span {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
}
</style>