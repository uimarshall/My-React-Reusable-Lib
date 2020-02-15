import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

const RoomsContainer = () => {
	return (
		<div>
			<RoomList />
			<RoomFilter />
		</div>
	);
};

export default RoomsContainer;
