import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-0">
				<div className="container">
					<Link className="navbar-brand" to="/">
						SharpTenant
					</Link>
					<div className="flex-grow-1 d-flex">
						<div class="col-xl-6 col-md-7 col-sm-12">
							<div class="header-address">
								<Link to="">
									<i class="la la-phone-square"></i>
									<span>(647) 346-0855</span>
								</Link>
								<Link to="#">
									<i class="la la-map-marker"></i>
									<span>CF Fairview Mall, Toronto, ON</span>
								</Link>
							</div>
						</div>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="">
									<span class="fa-stack fa-lg">
										<i class="fa fa-circle fa-stack-2x"></i>
										<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="">
									<span class="fa-stack fa-lg">
										<i class="fa fa-circle fa-stack-2x"></i>
										<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="">
									<span class="fa-stack fa-lg">
										<i class="fa fa-circle fa-stack-2x"></i>
										<i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="">
									<span class="fa-stack fa-lg">
										<i class="fa fa-circle fa-stack-2x"></i>
										<i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* second nav */}
		</div>
	);
};

export default Navbar;
