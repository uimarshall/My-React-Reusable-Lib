import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Header from "./components/core/Header";
import CallToAction from "./components/core/CallToAction";
import Services from "./components/core/Services";
import Portfolio from "./components/core/Portfolio";

function App() {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<Navbar />
					<Header />
					<CallToAction />
					<Services />
					<Portfolio />
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
