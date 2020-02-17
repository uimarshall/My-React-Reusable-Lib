import React from "react";
import { withRoomContextConsumer } from "../../contexts/RoomContext";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";

const RoomsContainer = ({ context }) => {
	const { loading, sortedRooms, rooms } = context;

	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</>
	);
};

export default withRoomContextConsumer(RoomsContainer);

// const RoomsContainer = () => {
// 	return (
// 		<RoomContextConsumer>
// 			{value => {
// 				const { loading, sortedRooms, rooms } = value;
// 				if (loading) {
// 					return <Loading />;
// 				}
// 				return (
// 					<div>
// 						<RoomList rooms={sortedRooms} />
// 						<RoomFilter rooms={rooms} />
// 					</div>
// 				);
// 			}}
// 		</RoomContextConsumer>
// 	);
// };

// export default RoomsContainer;
