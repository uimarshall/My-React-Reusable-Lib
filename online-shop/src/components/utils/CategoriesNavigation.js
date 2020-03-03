import React from "react";
import { Link } from "react-router-dom";

import hamburger from "../../images/hamburger.png";
import CategoriesMainMenu from "./CategoriesMainMenu";

const CategoriesNavigation = () => {
	return (
		<>
			<div className="cat-navigation">
				<img src={hamburger} alt="harburger" className="toggle" />
				<Link to="" className="categories">
					Categories
				</Link>
			</div>
			<CategoriesMainMenu />
		</>
	);
};

export default CategoriesNavigation;
