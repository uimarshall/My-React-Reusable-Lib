import React from "react";
import card from "../../img/credit-card2.png";
import returnicon from "../../img/return-icon.png";
import truck from "../../img/truck2.png";
import guarantee from "../../img/guarantee-100.png";

const WebpageFeatures = () => {
	return (
		<React.Fragment>
			<section className="webpage-features">
				<div className="container">
					<div className="row">
						<div className="col-md-3 feature-box">
							<img src={guarantee} alt="food" />
							<div className="feature-text">
								<p>
									<strong>100% Proven Original items</strong> are available in
									our store
								</p>
							</div>
						</div>
						<div className="col-md-3 feature-box">
							<img src={returnicon} alt="food" />
							<div className="feature-text">
								<p>
									<strong>Return within 30 days</strong> of receiving your order
								</p>
							</div>
						</div>
						<div className="col-md-3 feature-box">
							<img src={truck} alt="food" />
							<div className="feature-text">
								<p>
									<strong>Get free delivery for every</strong> order more than
									$500.00
								</p>
							</div>
						</div>
						<div className="col-md-3 feature-box">
							<img src={card} alt="food" />
							<div className="feature-text">
								<p>
									<strong>Pay Online through multiple</strong> options:card
									/Online banking)
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default WebpageFeatures;
