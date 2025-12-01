import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    role: null,
    status: "idle",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.email;
            state.role = action.payload.role;
            state.status = "success";
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            state.status = "idle";
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
