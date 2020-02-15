import React, { createContext, useState, useEffect, Component } from "react";
import items from "../data";

export const RoomContext = createContext();

// const RoomContextProvider = props => {
// 	const [datas, setData] = useState([
// 		{
// 			rooms: [],
// 			sortedRooms: [],
// 			featuredRooms: [],
// 			loading: true
// 		}
// 	]);
// 	// getData
// 	const getData = () => {
// 		let rooms = requiredData(items);
// 		let featuredRooms = rooms.filter(room => room.featured === true);
// 		setData({
// 			rooms,
// 			sortedRooms: rooms,
// 			featuredRooms,
// 			loading: false
// 		});
// 	};

// 	// useEffect(() => {
// 	// 	// effect

// 	// 	getData();

// 	// 	// console.log(rooms);
// 	// }, [datas]);

// 	const requiredData = someParams => {
// 		let tempItems = someParams.map(item => {
// 			let id = item.features.id;
// 			let images = item.fields.images.map(image => image.fields.file.url);
// 			let room = { ...item.fields, images, id };
// 			return room;
// 		});
// 		return tempItems;
// 	};

// 	return (
// 		<RoomContext.Provider value={{ ...datas }}>
// 			{props.children}
// 		</RoomContext.Provider>
// 	);
// };

// export default RoomContextProvider;

class RoomContextProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true
	};

	componentDidMount() {
		let rooms = this.requiredData(items);
		let featuredRooms = rooms.filter(room => room.featured === true);
		this.setState({
			rooms,
			sortedRooms: rooms,
			featuredRooms,
			loading: false
		});
	}

	requiredData = someParams => {
		let tempItems = someParams.map(item => {
			let id = item.features.id;
			let images = item.fields.images.map(image => image.fields.file.url);
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	};
	// getRooms

	getRoom = slug => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find(room => room.slug === slug);
		return room;
	};
	render() {
		return (
			<RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

export default RoomContextProvider;
