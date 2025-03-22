import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => { }, // helps with auto completion
});
