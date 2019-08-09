import React from "react";
import computers from "../../img/computers1.png";
const Header = () => {
	return (
		<React.Fragment>
			<header className="heading container">
				<div className="row mt-5">
					<div className="col-lg-6 mt-5 py-5 pl-5">
						<img
							className="img-fluid animated zoomIn delay-1s"
							src={computers}
							alt="computers"
						/>
					</div>
					<div className="col-lg-6 my-auto">
						<div className="row">
							<div className="col-lg-10 offset-lg-1 heading-content overflow-hidden">
								<h1 className="pb-3 my-5 animated slideInDown delay-2s">
									Be the first to get awerness with our solutions!
								</h1>
								<p className="pb-3 animated slideInLeft delay-2s">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Obcaecati, natus, reiciendis ex esse a tempore iste soluta,
									quo inventore deleniti facere ducimus? A quidem similique
									libero accusantium dolorem at nostrum?
								</p>
								<button
									type="button"
									className="btn btn-lg btn-outline-secondary animated bounceIn delay-3s"
								>
									Learn more
								</button>
								<button
									type="button"
									className="btn btn-lg btn-secondary ml-2 animated bounceIn delay-4s"
								>
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
