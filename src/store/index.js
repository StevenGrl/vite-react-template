// -----------------------------------
// Utilisation de zustand bien plus simple à gérer (au profit de redux)
// -----------------------------------

import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { ENABLE_DEV_TOOLS } from '../config';

const initialState = {
  user: {
    connected: false,
    userInfos: null
  },
  loading: false,
  count: 0
};

const store = (set) => ({
  ...initialState,
  setLoadingInProgress: () => set(() => ({ loading: true })),
  setLoadingDone: () => set(() => ({ loading: false })),
  setConnectedUser: (payload) => set(() => ({ user: { connected: true, userInfos: payload } })),
  logout: () => set(() => ({ user: { connected: false, userInfos: null } })),
  incrementCounter: (count) => set(() => ({ count: count + 1 }))
});

export const useStore = create(ENABLE_DEV_TOOLS ? devtools(store, { name: 'my-custom-store-app' }) : store);
