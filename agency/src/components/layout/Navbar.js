import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<React.Fragment>
			<nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
				{/* 'navbar-expand-sm': sm = hamburger will appear in mobile */}
				{/* md = hamburger will appear in tablet */}
				<div class="container">
					<a class="navbar-brand" href="#">
						Agency
					</a>
					<button
						class="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					{/* The Real Navbar */}
					{/* class of 'justify-content-end' will shift the nav menus to right */}
					<div
						class="collapse navbar-collapse justify-content-end"
						id="collapsibleNavId"
					>
						<ul class="nav">
							<li class="nav-item">
								<Link class="nav-link" to="#">
									About Us <span class="sr-only">(current)</span>
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="#">
									Pricing
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="#">
									Team
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="#">
									Services
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link btn btn-outline-secondary" to="#">
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
