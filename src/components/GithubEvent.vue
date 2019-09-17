<template>
  <div>
    <small>{{ dateTime(event.created) }}</small>
    <a :href="event.url" target="_blank">
      <span>
        <img :src="event.avatar" />
      </span>
      <small class="ml-1"
        >{{ event.actor }} {{ event.action }} {{ event.type }}</small
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  methods: {
    dateTime(createdDate, todayDate) {
      const MILLISECONDS_1_DAY = 86400000;
      const today = typeof todayDate !== "undefined" ? new Date(todayDate).getTime() : new Date().getTime();
      const created = new Date(createdDate).getTime();
      const diff = today - created - MILLISECONDS_1_DAY;
      if (diff <= 0) {
        return new Date(createdDate).toLocaleTimeString();
      }
      return new Date(createdDate).toLocaleDateString();
    }
  }
};
</script>

<style>
img {
  max-height: 24px;
  border-radius: 50%;
}
</style>
