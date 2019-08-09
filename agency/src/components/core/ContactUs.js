import React from "react";
{
	/* <div class="mapouter"><div class="gmap_canvas">
    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Ikeja%20City%20Mall&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"
    ></iframe><a href="https://www.embedgooglemap.net/blog/best-wordpress-themes/">wordpress</a></div><style>.mapouter{position: relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow: hidden;background:none!important;height:500px;width:600px;}</style></div> */
}

const ContactUs = () => {
	return (
		<section className="contact">
			<div className="container text-center w-50">
				<h2 className="py-3">Contact Us</h2>
				<div className="mx-auto heading-line mt-1 mb-5" />
			</div>
			<div className="row">
				{/* Google Maps */}
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
				<div className="col-lg-6">
					<div className="well well-sm">
						<form className="form-horizontal" method="post">
							<fieldset>
								<legend className="header">Contact us</legend>

								<div className="form-group">
									<span className="col-md-1 col-md-offset-2 text-center">
										<i className="fa fa-user bigicon" />
									</span>
									<div className="col-md-8">
										<input
											id="fname"
											name="name"
											type="text"
											placeholder="First Name"
											className="form-control"
										/>
									</div>
								</div>
								<div className="form-group">
									<span className="col-md-1 col-md-offset-2 text-center">
										<i className="fa fa-user bigicon" />
									</span>
									<div className="col-md-8">
										<input
											id="lname"
											name="name"
											type="text"
											placeholder="Last Name"
											className="form-control"
										/>
									</div>
								</div>

								<div className="form-group">
									<span className="col-md-1 col-md-offset-2 text-center">
										<i className="fa fa-envelope-o bigicon" />
									</span>
									<div className="col-md-8">
										<input
											id="email"
											name="email"
											type="text"
											placeholder="Email Address"
											className="form-control"
										/>
									</div>
								</div>

								<div className="form-group">
									<span className="col-md-1 col-md-offset-2 text-center">
										<i className="fa fa-phone-square bigicon" />
									</span>
									<div className="col-md-8">
										<input
											id="phone"
											name="phone"
											type="text"
											placeholder="Phone"
											className="form-control"
										/>
									</div>
								</div>

								<div className="form-group">
									<span className="col-md-1 col-md-offset-2 text-center">
										<i className="fa fa-pencil-square-o bigicon" />
									</span>
									<div className="col-md-8">
										<textarea
											className="form-control"
											id="message"
											name="message"
											placeholder="Enter your massage for us here. We will get back to you within 2 business days."
											rows="7"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-md-12">
										<button
											type="submit"
											className="btn btn-outline-primary btn-lg"
										>
											Submit
										</button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
