import React from "react";
import loadingImg from "../../images/loading-gif.gif";

const Loading = () => {
	return (
		<div className="loading">
			<h4>Loading...</h4>
			<img src={loadingImg} alt="Loading Gif" />
		</div>
	);
};

export default Loading;
