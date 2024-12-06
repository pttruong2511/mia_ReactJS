import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.item.id
      );
      if (existingItem) {
        existingItem.quantity_cart += action.payload.quantity_cart;
      } else {
        state.items.push({
          ...action.payload.item,
          quantity_cart: action.payload.quantity_cart,
        });
      }
    },
    upQuantity: (state, action) => {
      const find = state.items.find(
        (item) => item.id === action.payload.id
      );
      if(find.quantity_cart + 1 <= find.quantity){
        find.quantity_cart += 1;
      }else{
        alert('Quá số lượng hiện có')
      }
    },
    downQuantity: (state, action) => {
      const find = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (find.quantity_cart - 1 === 0) {
        find.quantity_cart = 1;
      } else {
        find.quantity_cart -= 1;
      }
    },

    removeProduct: (state, action) =>{
      state.items = state.items.filter( (item) => item.id !== action.payload.id)
    },

    removeAll: (state, action) => {
      state.items = []
    }
  },


});

export const { addToCart, upQuantity, downQuantity, removeProduct, removeAll } = cartSlice.actions;
export default cartSlice;
