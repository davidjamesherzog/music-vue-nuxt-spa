import Vue from 'vue';
import Vuex from 'vuex';
import Audio from './audio';
import Music from './music';

Vue.use(Vuex);

const store = new Vuex.Store({});

// eslint-disable-next-line no-new
new Audio({ store, name: 'audio' });
// eslint-disable-next-line no-new
new Music({ store, name: 'music' });

const createStore = () => {
  return store;
};

export default createStore;
