import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Header />
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</div>
		</Router>
	);
}


export default App;
