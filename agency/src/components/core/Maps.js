import React from "react";

const Maps = () => {
	return (
		<React.Fragment>
			<div className="col-lg-6">
				<div
					className="z-depth-1-half map-container"
					id="map-container-google-1"
				>
					<iframe
						width="600"
						height="500"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Ikeja%20City%20Mall&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Maps;
