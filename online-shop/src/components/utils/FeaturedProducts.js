import React from "react";
import laptop from "../../images/apple-laptop-1.png";
import headphone from "../../images/headphone-1.png";
import camera from "../../images/camera-1.png";

const FeaturedProducts = () => {
	return (
		<>
			<div className="products">
				<fieldset className="col-1">
					<legend>New</legend>
					<img src={laptop} alt="laptop" className="img-1" />
					<h3>
						$156.54<strike>$187.37</strike>
					</h3>
					<h4>
						Apple Laptop Macbook Laptops Inch Air (Intel Duo Core 4GB RAM, 1T
						HDD)
					</h4>
				</fieldset>
				<fieldset className="col-2">
					<legend>New</legend>
					<img src={headphone} alt="head phone" className="img-1" />
					<h3>
						$102.65<strike>$110.45</strike>
					</h3>
					<h4>
						Apple Laptop Macbook Laptops Pack (Solid on touch, resistance to
						water and fall )
					</h4>
				</fieldset>
				<fieldset className="col-3">
					<legend>New</legend>
					<img src={camera} alt="Camera" className="img-1" />
					<h3>
						$546.65<strike>$698.45</strike>
					</h3>
					<h4>Photo Camera, Resolution: 2000x2000, Size: 1.5MB</h4>
				</fieldset>
			</div>
		</>
	);
};

export default FeaturedProducts;
