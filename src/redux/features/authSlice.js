import { updateUserDB } from "@/src/app/[locale]/_lib/actions";
import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const user = window.localStorage.getItem("user");
    return user ? JSON.parse(user) : false;
  }
  return false;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("user", JSON.stringify(action.payload));
      }
      state.user = action.payload;
    },
    logoutRedux: (state) => {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("user");
      }
      state.user = false;
    },
    addToBasket: (state, action) => {
      if (state.user) {
        const newBasket = state.user.basket ? [...state.user.basket] : [];
        if (Array.isArray(action.payload)) {
          action.payload.forEach((newProduct) => {
            const existingProduct = newBasket.find(
              (item) => item.cartId === newProduct.cartId
            );
            if (existingProduct) {
              existingProduct.count += newProduct.count;
            } else {
              newBasket.push(newProduct);
            }
          });
        } else {
          const existingProduct = newBasket.find(
            (item) =>
              item.id === action.payload.id &&
              item.selectedSize === action.payload.selectedSize &&
              item.selectedColor === action.payload.selectedColor
          );
          if (existingProduct) {
            existingProduct.count += action.payload.count;
          } else {
            newBasket.push(action.payload);
          }
        }
        state.user = {
          ...state.user,
          basket: newBasket,
        };
        if (typeof window !== "undefined") {
          window.localStorage.setItem("user", JSON.stringify(state.user));
        }
        updateUserDB(state.user.id, state.user);
      }
    },
    removeFromBasket: (state, action) => {
      if (state.user) {
        const newBasket = state.user.basket.filter(
          (item) => item.cartId !== action.payload
        );
        state.user = {
          ...state.user,
          basket: newBasket,
        };
        if (typeof window !== "undefined") {
          window.localStorage.setItem("user", JSON.stringify(state.user));
        }
        updateUserDB(state.user.id, state.user);
      }
    },
    updateItemCount: (state, action) => {
      if (state.user) {
        const { cartId, count } = action.payload;
        const newBasket = state.user.basket.map((item) =>
          item.cartId === cartId ? { ...item, count } : item
        );
        state.user = {
          ...state.user,
          basket: newBasket,
        };
        if (typeof window !== "undefined") {
          window.localStorage.setItem("user", JSON.stringify(state.user));
        }
      }
      updateUserDB(state.user.id, state.user);
    },
  },
});

export const {
  loginRedux,
  logoutRedux,
  addToBasket,
  removeFromBasket,
  updateItemCount,
} = authSlice.actions;
export default authSlice.reducer;
