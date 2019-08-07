import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Header from "./components/core/Header";

function App() {
	return (
		<React.Fragment>
			<Router>
				<div className="App">
					<Navbar />
					<Header />
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
