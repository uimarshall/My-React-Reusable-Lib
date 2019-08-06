import React from "react";
import googleappstore from "../../img/google play-appstore.jpg";
const Footer = () => {
	return (
		<section className="footer">
			<div className="container text-center">
				<div className="row">
					<div className="col-md-3">
						<h1>Useful Links</h1>
						<p>Privacy Policy</p>
						<p>Terms Of Use</p>
						<p>Return Policy</p>
						<p>Discounted Coupons</p>
					</div>
					<div className="col-md-3">
						<h1>Company</h1>
						<p>About Us</p>
						<p>Contact Us</p>
						<p>Career</p>
						<p>Affiliate</p>
					</div>
					<div className="col-md-3">
						<h1>Follow Us On</h1>
						<p>
							<i className="fa fa-facebook-official" />
							Facebook
						</p>
						<p>
							<i className="fa fa-twitter" />
							Twitter
						</p>
						<p>
							<i className="fa fa-linkedin" />
							LinkedIn
						</p>
						<p>
							<i className="fa fa-youtube-play" />
							Youtube
						</p>
					</div>

					<div className="col-md-3 footer-image">
						<h1>Download App</h1>
						<img src={googleappstore} alt="shirts" />
					</div>
				</div>
				<hr />
				<p className="copyright">
					Made With <i className="fa fa-heart-o" aria-hidden="true" /> By
					Marshall
				</p>
			</div>
		</section>
	);
};

export default Footer;
