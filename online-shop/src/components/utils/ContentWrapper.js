import React from "react";
import Slider from "./Slider";
import ProductDescContent from "./ProductDescContent";
import Navbar from "../layout/Navbar";

const ContentWrapper = () => {
	return (
		<div className="content-wrapper">
			<Navbar />
			<Slider />
			<ProductDescContent />
		</div>
	);
};

export default ContentWrapper;
