import React from "react";
import Search from "./components/search/Search";
import SearchResult from "./components/search/SearchResult";

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<h2>Search App</h2>

				<Search />
				<SearchResult />
			</div>
		</React.Fragment>
	);
}

export default App;
