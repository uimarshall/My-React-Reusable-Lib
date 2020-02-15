import React, { useContext } from "react";

import { RoomContext } from "../../contexts/RoomContext";
import Loading from "./Loading";
import Room from "../pages/Room";
import SectionTitle from "./SectionTitle";

const FeaturedRooms = () => {
	let { featuredRooms: rooms, loading } = useContext(RoomContext);
	rooms = rooms.map(room => {
		return <Room key={room.id} room={room} />;
	});
	return (
		<section className="featured-rooms">
			<SectionTitle title="featured rooms" />
			<div className="featured-rooms-center">
				{loading ? <Loading /> : rooms}
			</div>
		</section>
	);
};

export default FeaturedRooms;
