import { createSlice } from "@reduxjs/toolkit";



const coursesSlice = createSlice({
    name: "Courses",
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

export default coursesSlice.reducer
export const { setFilter, setTab, setInternetStatus } = coursesSlice.actions