import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import ServiceContextProvider from "./contexts/ServiceContext";
import RoomContextProvider from "./contexts/RoomContext";
import SingleRoom from "./components/pages/SingleRoom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<ServiceContextProvider>
					<RoomContextProvider>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/rooms/:slug" component={SingleRoom} />
							<Route path="/rooms" component={Rooms} />
							{/* If no route matched, return 'errorPage' */}
							<Route component={ErrorPage} />
						</Switch>
					</RoomContextProvider>
				</ServiceContextProvider>
			</div>
		</Router>
	);
}

export default App;
