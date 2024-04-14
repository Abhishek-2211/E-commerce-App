import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/cart/cartSlice';
//import productReducer from "../feature/cart/productSlice";
export const store = configureStore({
   // reducer:{},
 // reducer:  cartReducer,
    
     reducer:{
      allCart:cartReducer,
     }
    
     
  /* reducer: ProductDetailsReducer,*/
})



