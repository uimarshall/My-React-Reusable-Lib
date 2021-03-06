import React from "react";
import { Link } from "react-router-dom";
import Hero from "../layout/Hero";
import Banner from "../utils/Banner";

const ErrorPage = () => {
	return (
		<div>
			<Hero>
				<Banner title="404" subtitle="sorry, page not found!">
					<Link to="/" className="btn-primary">
						return home
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

export default ErrorPage;
