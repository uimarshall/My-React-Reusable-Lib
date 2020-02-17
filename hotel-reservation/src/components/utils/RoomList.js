import React from "react";
import Room from "../pages/Room";
import RoomsContainer from "./RoomsContainer";

// The props received as 'rooms' is the 'sortedRooms' frm 'RoomsContainer' comp
const RoomList = ({ rooms }) => {
	if (rooms.length === 0) {
		return (
			<div className="empty-search">
				<h3>sorry, no room matched your search parameters</h3>
			</div>
		);
	}
	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{rooms.map(room => {
					return <Room key={room.id} room={room} />;
				})}
			</div>
		</section>
	);
};

export default RoomList;
