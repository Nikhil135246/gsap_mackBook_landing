import { texture } from 'three/tsl';
import {create} from 'zustand';

// create = zustand function to create a store
// set = function to update the store
// ! set just a function name kuch bhi de sakte ho

const useMacbookStore = create((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: '/videos/feature-1.mp4',
  setTexture: (texture) => set({ texture }),

  /* texture bhi add karenge taki reset ho tho texture original ya ek defalut video ho  */
  reset: () => set({ color: '#2e2c2e', scale: 0.08,texture:'/videos/feature-1.mp4' }),
  /* reset is not mandatory. / but imp for our case
  It’s just a convenience so you can put 
  everything back to the initial values with one call.
   */
}));

export default useMacbookStore;
