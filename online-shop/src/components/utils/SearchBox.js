import React from "react";

const SearchBox = () => {
	return (
		<>
			<input type="text" placeholder="search" className="search-box" />
			<button type="button" className="btn-search">
				Search
			</button>
		</>
	);
};

export default SearchBox;
