import React from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

import logo from "../../../img/logo2.svg";
const Navbarcss = () => {
	return (
		<React.Fragment>
			<nav className="top-navbar">
				<div className="search-box">
					<i class="fa fa-bars" aria-hidden="true" id="menu-btn" />
					<i class="fa fa-times" aria-hidden="true" id="close-btn" />
					<img src={logo} alt="logo" className="logo" />
					<input type="text" className="form-control" id="" />
					<span className="input-group-text">
						<i class="fa fa-search" aria-hidden="true" />
					</span>
				</div>
				<div className="nav-menu">
					<ul>
						<li>
							<Link to="">
								<i class="fa fa-cart-plus" aria-hidden="true" />
								Cart
							</Link>
						</li>
						<li>
							<Link to="">Sign Up</Link>
						</li>
						<li>
							<Link to="">Log In</Link>
						</li>
					</ul>
				</div>
			</nav>
			<SidebarMenu />
		</React.Fragment>
	);
};

export default Navbarcss;
