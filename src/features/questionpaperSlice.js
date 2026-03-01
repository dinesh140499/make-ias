import { createSlice } from "@reduxjs/toolkit";



const questionpaperSlice = createSlice({
    name: "Question Paper",
    initialState: {
        filter: {
            modal: false,
            tab: "",
            data: {}
        },
    },

    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setTab: (state, action) => {
            state.tab = action.payload
        },
        
    }
})

export default questionpaperSlice.reducer
export const { setFilter, setTab, setInternetStatus } = questionpaperSlice.actions