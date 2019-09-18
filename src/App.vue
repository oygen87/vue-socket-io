<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'theme'
  ]),
  watch : {
    theme : function(val) {
      document.body.className = val;
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body.light {
  background-color: #FFF;
}

body.dark {
  background-color: #333 !important;
  color: #EEE !important;
}
body.dark span, body.dark strong, body.dark small, body.dark h1 {
  color: #EEE !important;
}
body.dark input[type="text"] {
  background-color: #333;
  border-style: solid;
  border-width: 1px;
  color: #CCC;
}
@media only screen and (max-width: 576px) {
  body.dark input[type="text"] {
  border: 0;
}
}
</style>
