import React from "react";
import { Link } from "react-router-dom";
import phone1 from "../../images/product-1.png";
import phone2 from "../../images/product-2.png";
import phone5 from "../../images/product-5.png";

const Slider = () => {
	return (
		<>
			<div className="slider">
				<div className="slides">
					<div className="slide1">
						<img src={phone1} alt="slides phone" className="img-1" />
					</div>
					<div className="slide1">
						<img src={phone2} alt="slides phone" className="img-2" />
					</div>
					<div className="slide1">
						<img src={phone5} alt="slides phone" className="img-3" />
					</div>
					<div className="slide-info">
						<h1>HTC-1</h1>
						<p>Let's help you create the comfort you deserve!</p>
						<Link className="btn-shop-now">Shop Now!</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
