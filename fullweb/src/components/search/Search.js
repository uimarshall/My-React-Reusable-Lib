import React, { Component } from "react";

import { getSearchResult } from "../../actions/getSearchResult";
import { connect } from "react-redux";

class Search extends Component {
	handleChange = (e) => {
		console.log(this.props);
		if (e.target.value.trim() !== "") {
			this.props.getSearchResult(e.target.value);
		}
	};

	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange} />
			</div>
		);
	}
}
// Map action creators to the component
const mapDispatchToProps = {
	getSearchResult,
};

export default connect(null, mapDispatchToProps)(Search);
