import React from "react";
import computers from "../../img/computers1.png";
const Header = () => {
	return (
		<React.Fragment>
			<header className="heading container">
				<div className="row mt-5">
					<div className="col-lg-6 mt-5 py-5 pl-5">
						<img className="img-fluid" src={computers} alt="computers" />
					</div>
					<div className="col-lg-6 my-auto">
						<div className="row">
							<div className="col-md-10 offset-lg-1 heading-content">
								<h1 className="pb-3 my-5">
									Be the first to get awerness with our solutions!
								</h1>
								<p className="pb-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Obcaecati, natus, reiciendis ex esse a tempore iste soluta,
									quo inventore deleniti facere ducimus? A quidem similique
									libero accusantium dolorem at nostrum?
								</p>
								<button type="button" class="btn btn-lg btn-outline-primary">
									Learn more
								</button>
								<button type="button" class="btn btn-lg btn-secondary ml-2">
									Contact Us
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
