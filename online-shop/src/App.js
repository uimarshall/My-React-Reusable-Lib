import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import BrandLogo from "./components/utils/BrandLogo";

function App() {
	return (
		<Router>
			<section className="section">
				<BrandLogo />
				<Navbar />
			</section>
		</Router>
	);
}

export default App;
