import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import BrandLogo from "./components/utils/BrandLogo";
import ContentWrapper from "./components/utils/ContentWrapper";

function App() {
	return (
		<Router>
			<section className="section">
				<BrandLogo />

				<ContentWrapper />
			</section>
		</Router>
	);
}

export default App;
