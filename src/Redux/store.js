import { configureStore } from '@reduxjs/toolkit';
import product from './productSlice';
import cart from './cartSlice';
import like from './likesSlice';

export const store = configureStore({
    reducer: {
    product,
    cart,
    like
    }
  })

export default store;