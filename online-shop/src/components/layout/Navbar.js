import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../utils/SearchBox";
import PhoneCall from "../utils/PhoneCall";

const Navbar = () => {
	return (
		<>
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
		</>
	);
};

export default Navbar;
