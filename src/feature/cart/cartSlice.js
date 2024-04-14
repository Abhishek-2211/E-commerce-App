import { createSlice, nanoid } from "@reduxjs/toolkit";

import productData from "./productData.js";
import sliderData from "./sliderData.js";
const initialState = {
  cartItems: [],
  productInfo: productData,
  slideData: sliderData,
  totalQuantity: 0,
  count: 1,
  pageDetail: {
    detail: [],
    count: 0,
  },
  searchProduct: [],
  inputData: [],
  onChangeData: "",
  ItemNotAvailable: "item doesn't found",
};

export const cartSlice = createSlice({
  name: "cartItems",

  initialState,

  reducers: {
    cartItem: (state, action) => {
      console.log("ACTION", action.payload.id);

      let find = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartItems[find].quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (todo) => todo.id !== action.payload
      );
    },
    incQuantity: (state, action) => {
      let find = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (find >= 0) {
        state.cartItems[find].quantity += 1;
      }
    },
    dQuantity: (state, action) => {
      let find = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (find >= 0 && state.cartItems[find].quantity > 1) {
        state.cartItems[find].quantity -= 1;
      }
    },

    addCount: (state, action) => {
      if (state.count < state.slideData.length) {
        state.count += action.payload;
      } else {
        state.count = 0;
        state.count += action.payload;
      }
    },

    subCount: (state, action) => {
      if (state.count == state.slideData.length) {
        state.count = 2;
        state.count -= action.payload;
      } else {
        state.count -= action.payload;
      }
    },

    detail: (state, action) => {
      state.pageDetail.count++;
      if (state.pageDetail.count >= 2) {
        state.pageDetail.detail = state.pageDetail.detail.filter((todo) => {
          todo == action.payload;
        });
        state.pageDetail.detail.push(action.payload);
      } else {
        state.pageDetail.detail.push(action.payload);
      }
    },

    inputData: (state, action) => {
      state.inputData.push(state.onChangeData);
    },

    searchProducts: (state, action) => {
      if (state.searchProduct.length > 0) {
        state.searchProduct = state.searchProduct.filter(
          (item) => item.oldPrice == 0
        );
      }
      let newProduct = state.productInfo.filter((item) =>
        item.title.toLowerCase().includes(state.onChangeData)
      );

      console.log("new product", newProduct);
      newProduct.map((item) => state.searchProduct.push(item));
      state.onChangeData = "";
      console.log("search", state.searchProduct);
    },
    changeData: (state, action) => {
      state.onChangeData = action.payload;
    },
    clearSearchProduct: (state, action) => {
      console.log("i am in ");
      state.searchProduct = state.searchProduct.filter(
        (item) => item.oldPrice == 0
      );
      console.log("delete--", state.searchProduct);
    },
  },
});

export const {
  cartItem,
  deleteItem,
  incQuantity,
  dQuantity,
  slideData,
  addCount,
  detail,
  changeData,
  inputData,
  searchProducts,
  clearSearchProduct,
  ItemNotAvailable,
} = cartSlice.actions;
export default cartSlice.reducer;
