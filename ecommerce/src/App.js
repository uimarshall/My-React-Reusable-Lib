import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbarcss from "./components/Layout/Navbarcss";
import Slider from "./components/core/Slider";
import FeaturedProducts from "./components/core/FeaturedProducts";
import OnSale from "./components/core/OnSale";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbarcss />
				<Slider />
				<FeaturedProducts />
				<OnSale />
			</div>
		</Router>
	);
}

export default App;
