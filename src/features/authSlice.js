import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: JSON.parse(localStorage.getItem("token")) || null,
};


const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            console.log(`Token received : ${action.payload}`)
            localStorage.setItem("token", JSON.stringify(action.payload));
        },
        setLogout: (state) => {
            state.auth = null;
            localStorage.removeItem("token");
        },
    },
});

export default authSlice.reducer;
export const { setLogin, setLogout } = authSlice.actions;
