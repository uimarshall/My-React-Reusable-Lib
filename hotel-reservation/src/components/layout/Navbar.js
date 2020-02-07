import React from "react";

import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo-2.png";

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg px-3" id="navbar">
				<Link href="#" className="navbar-brand">
					<img src={logo} alt="company logo" />
				</Link>{" "}
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#my-nav">
					<span className="navbar-icon">
						<i className="fa fa-bars"> </i>
					</span>{" "}
				</button>{" "}
				{/* Collapse Navbar */}{" "}
				<div className="collapse navbar-collapse" id="my-nav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<NavLink to="/" className="nav-link">
								home{" "}
							</NavLink>{" "}
						</li>{" "}
						<li className="nav-item">
							<NavLink to="/rooms" className="nav-link">
								rooms
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#inventory" className="nav-link">
								about
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="#featured" className="nav-link">
								contact us
							</NavLink>
						</li>
					</ul>
					{/* Navbar Icons */}
					<div className="nav-icons d-none d-lg-block">
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							{/* fa-fw = fixed width */}
							<i className="fa fa-twitter fa-fw" title="twitter">
								{" "}
							</i>
						</Link>
						<Link
							to=""
							className="nav-icon mx-2 p-2 rounded-circle"
							title="twitter">
							<i className="fa fa-facebook fa-fw" title="facebook">
								{" "}
							</i>
						</Link>
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							<i className="fa fa-instagram fa-fw" title="instagram">
								{" "}
							</i>
						</Link>
						<Link to="" className="nav-icon mx-2 p-2 rounded-circle">
							<i className="fa fa-linkedin fa-fw" title="linkedin">
								{" "}
							</i>
						</Link>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
