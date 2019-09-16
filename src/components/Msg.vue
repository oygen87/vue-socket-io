<template>
  <div>
    <strong>{{ username }} :</strong>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    message: String
  }
};
</script>

<style>
</style>
