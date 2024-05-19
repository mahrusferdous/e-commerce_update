import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import { loadState, saveState } from "./sessionStorage";

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
