import React from "react";
import tablet from "../../images/product-5.png";
import phones from "../../images/product-2.png";

const ProductDescContent = () => {
	return (
		<>
			<div className="content-1">
				<div className="innertitle-1">
					<h3>Electronics</h3>
					<p className="para-1">
						Here to serve you better with a next to none product
					</p>
					<br />
					<p className="para-1">Shop Now!</p>
				</div>
				<div className="innertitle-2">
					<h3>Phones &amp; Tablets</h3>
					<p className="para-1">
						Here to serve you better with a next to none product
					</p>
					<br />
					<p className="para-1">Shop Now!</p>
				</div>
				<div className="inner-1">
					<img src={tablet} alt="tablets" className="img-1" />
				</div>
				<div className="inner-2">
					<img src={phones} alt="phones" className="img-2" />
				</div>
			</div>
		</>
	);
};

export default ProductDescContent;
