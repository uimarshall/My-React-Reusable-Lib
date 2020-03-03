import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../utils/SearchBox";
import PhoneCall from "../utils/PhoneCall";
import Slider from "../utils/Slider";

const Navbar = () => {
	return (
		<div className="menu-bar">
			<SearchBox />
			<PhoneCall />
			<nav>
				<Link to="" className="menu-item">
					Home
				</Link>
				<Link to="" className="menu-item">
					Wish list(0)
				</Link>
				<Link to="" className="menu-item">
					My Account
				</Link>
				<Link to="" className="menu-item">
					Cart
				</Link>
				<Link to="" className="menu-item">
					Checkout
				</Link>
				<Link to="" className="menu-item">
					Item(s)
				</Link>
			</nav>
			<Slider />
		</div>
	);
};

export default Navbar;
