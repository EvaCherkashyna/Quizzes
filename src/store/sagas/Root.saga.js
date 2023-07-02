import { all } from "redux-saga/effects";
import {categoriesSaga} from "./Categories.saga"

export default function* rootSaga() {
  yield all([
    categoriesSaga()
  ]);
}
