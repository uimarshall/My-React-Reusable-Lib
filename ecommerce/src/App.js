import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbarcss from "./components/Layout/Navbarcss";
import Slider from "./components/core/Slider";
import FeaturedProducts from "./components/core/FeaturedProducts";
import OnSale from "./components/core/OnSale";
import NewProducts from "./components/core/NewProducts";
import WebpageFeatures from "./components/core/WebpageFeatures";
import Footer from "./components/Layout/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbarcss />
				<Slider />
				<FeaturedProducts />
				<OnSale />
				<NewProducts />
				<WebpageFeatures />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
