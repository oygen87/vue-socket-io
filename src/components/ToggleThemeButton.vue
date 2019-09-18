<template>
  <span @click="handleToggle">{{ icon }}</span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTheme"]),
    icon() {
      return this.getTheme === "light" ? "🕶️" : "🌞";
    }
  },
  methods: {
    handleToggle() {
      this.$store.dispatch("toggleTheme");
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