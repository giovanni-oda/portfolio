import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    loading: false,
    theme: ''
  }),

  getters: {
    isLoading() {
      return this.loading;
    },
    getTheme() {
      return this.theme;
    }
  },

  actions: {
    //
    action1() {
      //
    }
  }
});
