import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Header />

				<Switch>
					<Route component={ErrorPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
