import React from "react";
import { connect } from "react-redux";
import DisplaySearchResults from "../DisplaySearchResults";

function SearchResult(props) {
	if (props.searchResults) {
		return (
			<div>
				<h4>....</h4>
				{renderSearchResult(props.searchResults)}
			</div>
		);
	}
	return null;
}

const renderSearchResult = (results) => {
	return results.map((result, index) => {
		// return <div>{console.log(result.toJs)}</div>;
		return <DisplaySearchResults result={result} key={index} />;
	});
};

const mapStateToProps = (state) => ({
	searchResults: state.search.get("searchResults"),
});
export default connect(mapStateToProps)(SearchResult);
