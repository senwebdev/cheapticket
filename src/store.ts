import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [
      {from_location: ''},
      {to_location: ''},
    ],
    showDropdown: true,
    dateState: null,
  },
  getters: {
    cities: (state) => {
      return state.cities;
    },
  },
  mutations: {
    saveCity: (state, payload) => {
      state.cities = payload;
    },
    updateShowdropdown: (state, payload) => {
      state.showDropdown = payload;
    },
    updateState: (state, payload) => {
      state.dateState = payload;
    },
  },
  actions: {
    saveCity: ({ commit }, payload) => {
      commit('saveCity', payload);
    },
    updateShowdropdown: ({ commit }, payload) => {
      commit('updateShowdropdown', payload);
    },
    updateState: ({ commit }, payload) => {
      commit('updateState', payload);
    },
  },
});
