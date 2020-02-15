import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Hero from "../layout/Hero";
import Banner from "../utils/Banner";
import defaultBgimg from "../../images/room-3.jpg";
import { RoomContext } from "../../contexts/RoomContext";

// const SingleRoom = props => {
// 	const { getRoom } = useContext(RoomContext);
// 	const [data, setData] = useState({
// 		slug: props.match.params.slug,
// 		defaultBgimg
// 	});
// 	const room = getRoom(data);
// 	if (!room) {
// 		return (
// 			<div className="error">
// 				<h3>no such room exist...</h3>
// 				<Link to="/rooms" className="btn-primary">
// 					back to rooms
// 				</Link>
// 			</div>
// 		);
// 	}
// 	const {
// 		name,
// 		description,
// 		capacity,
// 		size,
// 		price,
// 		extras,
// 		breakfast,
// 		pets,
// 		images
// 	} = room;

// 	return (
// 		<Hero hero="roomsHero">
// 			<Banner title={`${name} room`}>
// 				<Link to="/rooms" className="btn-primary">
// 					back to rooms
// 				</Link>
// 			</Banner>
// 		</Hero>
// 	);
// };

// export default SingleRoom;

export class SingleRoom extends Component {
	static contextType = RoomContext;

	state = {
		slug: this.props.match.params.slug,
		defaultBgimg
	};

	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		if (!room) {
			return (
				<div className="error">
					<h3>no such room exist...</h3>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</div>
			);
		}
		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images
		} = room;
		return (
			<Hero hero="roomsHero">
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</Banner>
			</Hero>
		);
	}
}

export default SingleRoom;
