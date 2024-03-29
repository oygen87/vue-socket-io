import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light"
  },
  getters: {
    getTheme(state) {
      return state.theme;
    }
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  },
  actions: {
    toggleTheme({ commit }) {
      commit("toggleTheme");
    }
  }
});
