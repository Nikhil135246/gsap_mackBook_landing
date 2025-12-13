import {create} from 'zustand';

// create = zustand function to create a store
// set = function to update the store
// ! set just a function name kuch bhi de sakte ho

const useMacbookStore = create((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: '#2e2c3e', scale: 0.08 }),
}));

export default useMacbookStore;
