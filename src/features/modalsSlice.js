import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        book_mentor: {
            modal: false
        },
    },
    reducers: {
        setBookMentor: (state, action) => {
            state.book_mentor = action.payload
        },
    }
})

export default modalsSlice.reducer
export const { setBookMentor } = modalsSlice.actions