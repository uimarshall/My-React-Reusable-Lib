import { takeLatest, all, put, call } from "redux-saga/effects";
import types from "../actions/actionTypes";

import axios from "axios";
import { setSearchResult } from "../actions/getSearchResult";
function* setSearch({ payload }) {
	try {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=7EzL1zmmpS2u23ovCrld53Yn4JliQoGY&q=${payload}&limit=25&offset=0&rating=G&lang=en`;
		const data = yield axios.get(url);
		console.log(data.data.data);
		return yield put(setSearchResult(data.data.data)); //dispatch data to redux state
	} catch (error) {}
}
function* watchSearch() {
	/**The watchSearch will listen to watchGetSearchResults and get the userInput 
	from the Search component, it will then pass the data to the setSearch worker, the setSearch will
	now make an API call slotting in the userInput data, 'put' will then dispatch the response/data from the API to the Reducer
	The Search Component will then fetch the data from the state and display in the UI*/
	yield takeLatest(types.watchGetSearchResults, setSearch);
}
export default watchSearch;
