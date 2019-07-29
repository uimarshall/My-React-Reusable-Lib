import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbarcss from "./components/Layout/Navbarcss";
import Slider from "./components/core/Slider";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbarcss />
				<Slider />
			</div>
		</Router>
	);
}

export default App;
