import { createSlice } from "@reduxjs/toolkit";

export const INTERNET_STATUS = {
    ONLINE: "online",
    OFFLINE: "offline",
}

const pagePerTestSlice = createSlice({
    name: "Page Per Test",
    initialState: {
        filter: {
            modal: false,
            tab: "",
            data: {}
        },
        internetStatus: INTERNET_STATUS.ONLINE
    },

    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setTab: (state, action) => {
            state.tab = action.payload
        },
        setInternetStatus: (state, action) => {
            state.internetStatus = action.payload
        }
    }
})

export default pagePerTestSlice.reducer
export const { setFilter, setTab, setInternetStatus } = pagePerTestSlice.actions