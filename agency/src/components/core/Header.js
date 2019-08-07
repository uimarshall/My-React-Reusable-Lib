import React from "react";
import computers from "../../img/computers1.png";
const Header = () => {
	return (
		<React.Fragment>
			<header className="home container">
				<div className="row mt-5">
					<div className="col-lg-6 mt-5 py5 pl-5">
						<img className="img-fluid" src={computers} alt="computers" />
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
