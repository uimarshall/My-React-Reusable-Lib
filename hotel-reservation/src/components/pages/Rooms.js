import React from "react";
import { Link } from "react-router-dom";
import Hero from "../layout/Hero";
import Banner from "../utils/Banner";

const Rooms = () => {
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						return home
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

export default Rooms;
