import React from "react";
import phoneImg from "../../images/phone-call-img-2.png";

const PhoneCall = () => {
	return (
		<>
			<img src={phoneImg} alt="call phone" className="call-icon" />
			<span className="tel-no">+234-80987-65993</span>
		</>
	);
};

export default PhoneCall;
