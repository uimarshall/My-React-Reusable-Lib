import React from "react";

function DisplaySearchResults({ result }) {
	// console.log(result.toJS().images.original.url);
	return (
		<div className="container">
			{/* <h2>
				<img src={result.toJS().images.original.url} alt="gids" />
			</h2> */}
			<div className="row">
				<div className="col-md-4">
					<div className="card" className="w-100">
						<img
							src={result.toJS().images.original.url}
							alt="gids"
							className="card-img-top w-100"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DisplaySearchResults;
