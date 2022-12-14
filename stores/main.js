import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    loading: false,
    theme: '',
    pageBlur: false
  }),

  getters: {
    isLoading() {
      return this.loading;
    },
    getTheme() {
      return this.theme;
    },
    getPageBlur() {
      return this.pageBlur;
    }
  },

  actions: {
    //
    action1() {
      //
    }
  }
});
