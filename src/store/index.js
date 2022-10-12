import Vue from "vue";
import Vuex from "vuex";
import { Rectangle } from "@/store/classes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rectangle: new Rectangle(),
    landingPageTimeout: true,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
