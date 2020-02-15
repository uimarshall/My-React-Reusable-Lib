import React from "react";
import { Link } from "react-router-dom";
import Hero from "../layout/Hero";
import Banner from "../utils/Banner";
import RoomsContainer from "../utils/RoomsContainer";

const Rooms = () => {
	return (
		<>
			<Hero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						return home
					</Link>
				</Banner>
			</Hero>
			<RoomsContainer />
		</>
	);
};

export default Rooms;
