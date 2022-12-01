import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    loading: false
  }),

  getters: {
    isLoading() {
      return this.loading;
    }
  },

  actions: {
    //
    action1() {
      //
    }
  }
});
