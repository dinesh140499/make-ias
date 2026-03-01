import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    previewImg: {
        modal: false
    }
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setPreviewImg: (state, action) => {
            state.previewImg = action.payload
        }
    }
});

export default commonSlice.reducer;
export const { setPreviewImg } = commonSlice.actions
