import { defineStore } from 'pinia';

const defaultState = {
  isAuthenticated: false,
  jwtToken: '',
};

export const authStore = defineStore({
  id: 'auth',
  state: () => defaultState,
  actions: {
    signIn(jwtToken: string) {
      this.jwtToken = jwtToken;
      this.isAuthenticated = true;
    },
  },
});
