import React from "react";

export default () => {
	return (
		<React.Fragment>
			<footer className="bg-dark text-white fixed-bottom mb-0 p-4 text-center">
				Copyright &copy; {new Date().getFullYear()} Hotel Reservation
			</footer>
		</React.Fragment>
	);
};
