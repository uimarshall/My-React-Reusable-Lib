// ul>li.item$*5
import React from "react";
import babytoys from "../../../img/babystoys.jpg";
import clothes from "../../../img/clothes.jpg";
import tabphone from "../../../img/tab-phone.jpg";
const Slider = () => {
	return (
		<React.Fragment>
			<div className="slider">
				<div
					id="sliderIndicator"
					className="carousel slide carousel-fade"
					data-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={tabphone} className="d-block w-100" alt="tab-phone" />
						</div>
						<div className="carousel-item">
							<img src={babytoys} className="d-block w-100" alt="toys image" />
						</div>
						<div className="carousel-item">
							<img src={clothes} className="d-block w-100" alt="clothes" />
						</div>
					</div>
					<ol class="carousel-indicators">
						<li
							data-target="#sliderIndicator"
							data-slide-to="0"
							class="active"
						/>
						<li data-target="#sliderIndicator" data-slide-to="1" />
						<li data-target="#sliderIndicator" data-slide-to="2" />
					</ol>
					<a
						className="carousel-control-prev"
						href="#sliderIndicator"
						role="button"
						data-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#sliderIndicator"
						role="button"
						data-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
			;
		</React.Fragment>
	);
};

export default Slider;
