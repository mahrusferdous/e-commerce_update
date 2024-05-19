import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    isLogged: false,
};

// User slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.isLogged = action.payload.isLogged;
        },
        logout: (state) => {
            state.name = "";
            state.isLogged = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
