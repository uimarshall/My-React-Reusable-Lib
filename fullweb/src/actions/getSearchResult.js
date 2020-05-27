import types from "./actionTypes";
export const getSearchResult = (userInput) => ({
	type: types.watchGetSearchResults,
	payload: userInput,
});
/**This action will be dispatched by 'put' in the saga, its func will be to get
 * the data coming from the API call and dispatch it to the reducer
 * so that other Components can subscribe to it.'result' params is the data from the API
 */
export const setSearchResult = (result) => ({
	type: types.setSearchResults,
	payload: result,
});
