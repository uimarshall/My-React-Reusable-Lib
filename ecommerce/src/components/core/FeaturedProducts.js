import React from "react";
import drinks from "../../img/drinks.jpg";
import tabphone from "../../img/tabphone.jpg";
import slideimg1 from "../../img/slideimg1.jpg";

const FeaturedProducts = () => {
	return (
		<section className="featured-cat">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img src={drinks} alt="drinks" />
					</div>
					<div className="col-md-4">
						<img src={tabphone} alt="tabphone" />
					</div>
					<div className="col-md-4">
						<img src={slideimg1} alt="slideimg" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
