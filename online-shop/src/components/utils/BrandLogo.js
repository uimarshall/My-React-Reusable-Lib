import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/phone-call-img-1.png";

import CategoriesNavigation from "./CategoriesNavigation";

const BrandLogo = () => {
	return (
		<div className="section1">
			<img src={logoImg} alt="brand logo" className="logo" />
			<CategoriesNavigation />
		</div>
	);
};

export default BrandLogo;
