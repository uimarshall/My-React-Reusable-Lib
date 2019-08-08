import React from "react";
import { Link } from "react-router-dom";
import phonelaptop from "../../img/phone-laptop.jpg";
import coder from "../../img/coder.jpg";
import webdev from "../../img/web-development.jpg";
import workingonsystem from "../../img/working-on-system.jpg";
const Portfolio = () => {
	return (
		<React.Fragment>
			<section className="portfolio container-fluid bg-light">
				<div className="container text-center w-50">
					<h2 className="py-3">Portfolio</h2>
					<div className="mx-auto heading-line">...</div>
				</div>
				<div className="row">
					<div className="col-lg-3 p-0">
						<div className="filter">...</div>
						<img src={phonelaptop} alt="Phone" />
					</div>
					{/* align-items-center: aligns items along the y-axis */}
					{/* justify-items-center: aligns/justify items along the x-axis */}
					<div className="col-lg-3 dark d-flex align-items-center justify-content-center">
						<div className="text-center">
							<h4 className="py-3">HTML &amp; CSS</h4>
							<Link className="m-2" to="#">
								<i className="fa fa-facebook" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-twitter" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-youtube" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-google" />
							</Link>
						</div>
					</div>
					<div className="col-lg-3 p-0">
						{/* <div className="filter">...</div> */}
						<img src={workingonsystem} alt="Laptop" />
					</div>
					{/* align-items-center: aligns items along the y-axis */}
					{/* justify-items-center: aligns/justify items along the x-axis */}
					<div className="col-lg-3 dark d-flex align-items-center justify-content-center">
						<div className="text-center">
							<h4 className="py-3">JAVASCRIPT</h4>
							<Link className="m-2" to="#">
								<i className="fa fa-facebook" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-twitter" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-youtube" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-google" />
							</Link>
						</div>
					</div>
					<div className="col-lg-3 dark d-flex align-items-center justify-content-center">
						<div className="text-center">
							<h4 className="py-3">WEB DEVELOPMENT</h4>
							<Link className="m-2" to="#">
								<i className="fa fa-facebook" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-twitter" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-youtube" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-google" />
							</Link>
						</div>
					</div>
					<div className="col-lg-3 p-0">
						<div className="filter">...</div>
						<img src={webdev} alt="Laptop" />
					</div>
					<div className="col-lg-3 dark d-flex align-items-center justify-content-center">
						<div className="text-center">
							<h4 className="py-3">CODE BEAST</h4>
							<Link className="m-2" to="#">
								<i className="fa fa-facebook" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-twitter" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-youtube" />
							</Link>
							<Link className="m-2" to="#">
								<i className="fa fa-google" />
							</Link>
						</div>
					</div>
					<div className="col-lg-3 p-0">
						<div className="filter">...</div>
						<img src={coder} alt="Laptop" />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Portfolio;
