import React from "react";
import Hero from "../layout/Hero";
import Banner from "../utils/Banner";
import { Link } from "react-router-dom";
import Services from "../utils/Services";

const Home = () => {
	return (
		<>
			{/* The 'defaultHero' passed as props is a className in 'index.css' */}
			<Hero>
				<Banner
					title="standard rooms"
					subtitle="standard room starting at $488">
					{/* children */}
					<Link to="/rooms" className="btn-primary">
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
		</>
	);
};

export default Home;
