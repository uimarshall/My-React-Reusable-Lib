import React, { useState, useEffect } from "react";

function App() {
	const [news, setNews] = useState([]);
	const [searchQuery, setSearchQuery] = useState("react");
	const [url, setUrl] = useState(
		"http://hn.algolia.com/api/v1/search?query=react"
	);
	const [loading, setLoading] = useState(false);

	const fetchNews = async () => {
		try {
			setLoading(true);
			let result = await fetch(url);

			const data = await result.json();
			await setNews(data.hits);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
		// setLoading(true);
		// fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
		// .then(dataFetched => dataFetched.json())
		// .then(data => setNews(data.hits),setLoading(false))
		// .catch(err => console.log(err));
	};

	useEffect(() => {
		fetchNews();
	}, [url]);

	// Sync the state(searchQuery) to whatever the user type in the form
	const handleChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	};

	// Loading
	const showLoading = () => (loading ? <h2>Loading data...</h2> : "");

	// Search Form
	const searchForm = () => (
		<form onSubmit={handleSubmit}>
			<input type="text" value={searchQuery} onChange={handleChange} />
			<button type="submit">Search</button>
		</form>
	);

	// Show News
	const showNews = () => {
		//use return statement with curly braces or just parenthesis for return statement

		return news.map((eachNews, index) => <p key={index}>{eachNews.title}</p>);
	};

	return (
		<div className="App">
			<h2>HawkEye News</h2>
			{showLoading()}
			{searchForm()}
			{showNews()}
		</div>
	);
}

export default App;
