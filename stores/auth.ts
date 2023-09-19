import { defineStore } from 'pinia';
import { User } from '@/types';

type authState = {
  currentUser: User | undefined;
};

const defaultState: authState = {
  currentUser: undefined,
};

export const authStore = defineStore({
  id: 'auth',
  state: () => defaultState,
  getters: {
    isAuthenticated: (state) => state.currentUser !== undefined,
    jwtToken: (state) => state.currentUser?.token,
  },
  actions: {
    signIn(user: User) {
      this.currentUser = user;
    },
  },
});
