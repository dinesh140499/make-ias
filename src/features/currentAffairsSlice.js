import { createSlice } from "@reduxjs/toolkit";



const currentAffairsSlice = createSlice({
    name: "Current Affairs Slice",
    initialState: {
        filter: {
            modal: false,
            tab: "",
            data: {}
        },
        current_affair: {
            modal: false
        },
    },

    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setTab: (state, action) => {
            state.tab = action.payload
        },
        setTestSeries: (state, action) => {
            state.current_affair = action.payload
        },

    }
})

export default currentAffairsSlice.reducer
export const { setFilter, setTab, setInternetStatus, setTestSeries } = currentAffairsSlice.actions