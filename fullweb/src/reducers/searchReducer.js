import types from "../actions/actionTypes";
import { Map, fromJS } from "immutable";
const initState = Map({
	searchResults: [],
});
const searchReducer = (state = initState, action) => {
	switch (
		action.type //It must be action.type and not 'types', otherwise it won't work.
	) {
		case types.setSearchResults:
			console.log(action);
			return state.merge({
				...state,
				searchResults: fromJS(action.payload),
			});
		// return {
		// 	...state,
		// 	searchResults: action.payload,
		// };

		default:
			return state;
	}
};
export default searchReducer;
