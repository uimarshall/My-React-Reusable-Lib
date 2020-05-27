import { all, fork } from "redux-saga/effects";
import searchSaga from "./searchSaga";

export default function* rootSaga() {
	yield all([fork(searchSaga)]);
}
