import React from "react";

const Card = () => {
	return (
		<div className="card">
			<div className="sides card-left-side">
				<h1 className="title">Your</h1>
				<h3 className="recipe">Is</h3>
			</div>
			<div className="sides card-right-side">
				<h1 className="title">Recipe</h1>
				<h3 className="recipe">Here</h3>
			</div>
			<div className="card-back-side">
				<p className="info">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, illo?
				</p>
			</div>
		</div>
	);
};

export default Card;
