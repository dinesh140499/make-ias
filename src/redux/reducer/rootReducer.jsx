// redux/reducer/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import modalsSlice from "../../features/modalsSlice";
import pagePerTestSlice from "../../features/pagePerTestSlice";
import coursesSlice from "../../features/coursesSlice";
import testsSlice from "../../features/testsSlice";
import currentAffairsSlice from "../../features/currentAffairsSlice";
import commonSlice from "../../features/commonSlice";
import booknotesSlice from "../../features/booknotesSlice";
import questionpaperSlice from "../../features/questionpaperSlice";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  modalsSlice,
  pagePerTestSlice,
  coursesSlice,
  testsSlice,
  currentAffairsSlice,
  commonSlice,
  booknotesSlice,
  questionpaperSlice,
});

export default rootReducer;
