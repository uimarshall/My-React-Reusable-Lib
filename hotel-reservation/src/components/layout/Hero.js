import React from "react";

const Hero = ({ hero, children }) => {
	return (
		<>
			<header className={hero}>{children}</header>
			{/* <p></p> */}
		</>
	);
};

// Default props to display if no props is passed into d Hero Comp, where the Hero comp is used e.g in the Home comp
Hero.defaultProps = {
	hero: "defaultHero"
};

export default Hero;
