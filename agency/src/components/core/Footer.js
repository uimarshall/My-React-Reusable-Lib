import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer mb-0 mt-5">
				<div className="text-center py-5">
					<h2 className="py-3">Agency</h2>
					<div className="mx-auto heading-line" />
				</div>
				<div className="row mb-3">
					<div className="col-lg-8 offset-lg-2 mx-auto text-center">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus numquam temporibus harum velit debitis libero error
							accusamus modi id, eum voluptates nobis doloremque quis! Commodi
							earum tempora a recusandae mollitia.
						</p>
						<ul className="nav justify-content-center">
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">
									Gallery
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="copyright text-center py-3 border-top text-muted">
					<p>Made by UI Marshall &copy; {new Date().getFullYear()}</p>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
