import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from '../features/modalsSlice'
import pagePerTestSlice from '../features/pagePerTestSlice'
import coursesSlice from '../features/coursesSlice'
import testsSlice from '../features/testsSlice'
import currentAffairsSlice from '../features/currentAffairsSlice'
import commonSlice from '../features/commonSlice'
import booknotesSlice from '../features/booknotesSlice'
import questionpaperSlice from '../features/questionpaperSlice'
import authSlice from '../features/authSlice'


const store = configureStore({
    reducer: {
        authSlice:authSlice,
        modalsSlice: modalsSlice,
        pagePerTestSlice: pagePerTestSlice,
        coursesSlice: coursesSlice,
        testsSlice: testsSlice,
        currentAffairsSlice: currentAffairsSlice,
        commonSlice: commonSlice,
        booknotesSlice: booknotesSlice,
        questionpaperSlice: questionpaperSlice

    }
})

export default store