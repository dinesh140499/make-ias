import { createSlice } from "@reduxjs/toolkit";



const testsSlice = createSlice({
    name: "Tests Slice",
    initialState: {
        filter: {
            modal: false,
            tab: "",
            data: {}
        },
        test_series: {
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
            state.test_series = action.payload
        },

    }
})

export default testsSlice.reducer
export const { setFilter, setTab, setInternetStatus, setTestSeries } = testsSlice.actions