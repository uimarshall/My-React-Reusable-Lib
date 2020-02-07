import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import ServiceContextProvider from "./contexts/ServiceContext";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Switch>
					<ServiceContextProvider>
						<Route exact path="/" component={Home} />
					</ServiceContextProvider>

					<Route path="/rooms" component={Rooms} />
					{/* If no route matched, return 'errorPage' */}
					<Route component={ErrorPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
