import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg fixed-top">
				{/* 'navbar-expand-sm': sm = hamburger will appear in mobile */}
				{/* md = hamburger will appear in tablet */}
				<div className="container">
					<a className="navbar-brand" href="#">
						Agency
					</a>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon">
							<i className="fa fa-bars" />
						</span>
					</button>
					{/* The Real Navbar */}
					{/* className of 'justify-content-end' will shift the nav menus to right */}
					<div
						className="collapse navbar-collapse justify-content-end"
						id="collapsibleNavId"
					>
						<ul className="nav">
							<li className="nav-item">
								<Link className="nav-link" to="#">
									About Us <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Pricing
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Team
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link btn btn-outline-secondary" to="#">
									Conatct Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
