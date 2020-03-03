import React from "react";
import { Link } from "react-router-dom";

const CategoriesMainMenu = () => {
	return (
		<>
			<div>
				<Link className="cat-main-menu links">
					<i className="fa fa-television fa-fw mr-2"> </i>Electronics
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-bus fa-fw mr-2"> </i>Free Delivery
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-mobile fa-fw mr-2"> </i>Phones &amp; Tablets
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-laptop fa-fw mr-2"> </i>Computing
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-building fa-fw mr-2"> </i>Home &amp; Office{" "}
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-female fa-fw mr-2"> </i>Fashion
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-medkit fa-fw mr-2"> </i>Health &amp; Beauty
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-gamepad fa-fw mr-2"> </i>Gaming
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-apple fa-fw mr-2"> </i>Grocery
				</Link>
				<Link className="cat-main-menu">
					<i className="fa fa-child fa-fw mr-2"> </i>Baby Products
				</Link>

				<Link className="cat-main-menu">
					<i className="fa fa-globe fa-fw mr-2"> </i>Other Categories
				</Link>
			</div>
		</>
	);
};

export default CategoriesMainMenu;
