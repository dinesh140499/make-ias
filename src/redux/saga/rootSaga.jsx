// redux/saga/rootSaga.js

import { all } from "redux-saga/effects";
import watchLoginSaga from "./authSaga";
import watchHomeSaga from "./homeSaga";

console.log("Root saga running");

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchHomeSaga(),
  ]);
}