import { createSlice } from "@reduxjs/toolkit";

const bookNotesSlice = createSlice({
    name: "books & notes",
    initialState: {
        modal: false
    },
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        },
    }
})

export default bookNotesSlice.reducer
export const { setModal } = bookNotesSlice.actions