import React from "react";
import Slider from "./Slider";
import ProductDescContent from "./ProductDescContent";
import Navbar from "../layout/Navbar";
import FeaturedProdBanner from "./FeaturedProdBanner";
import FeaturedProducts from "./FeaturedProducts";

const ContentWrapper = () => {
	return (
		<div className="content-wrapper">
			<Navbar />
			<Slider />
			<ProductDescContent />
			<FeaturedProdBanner />
			<FeaturedProducts />
		</div>
	);
};

export default ContentWrapper;
