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
		loading: true,
		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	};

	componentDidMount() {
		let rooms = this.requiredData(items);
		let featuredRooms = rooms.filter(room => room.featured === true);
		let maxPrice = Math.max(...rooms.map(room => room.price));
		let maxSize = Math.max(...rooms.map(room => room.size));
		this.setState({
			rooms,
			sortedRooms: rooms,
			featuredRooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize
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
	name;
	// Handlechange
	handleChange = e => {
		const target = e.target;
		const value = e.type === "checkbox" ? target.checked : target.value;
		const name = e.target.name;
		this.setState(
			{
				[name]: value
			},
			this.filterRooms
		);
	};

	// Filter Rooms
	filterRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			maxPrice,
			minPrice,
			maxSize,
			minSize,
			breakfast,
			pets
		} = this.state;
		// Get all the rooms
		let tempRooms = [...rooms];
		// Format from string to int
		capacity = parseInt(capacity);
		// filter by type
		if (type !== "all") {
			tempRooms = tempRooms.filter(room => room.type === type);
		}
		// Filter by capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity);
		}
		this.setState({
			sortedRooms: tempRooms
		});
	};

	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange
				}}>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}

export const RoomContextConsumer = RoomContext.Consumer;

// So we export the context we want to consume(RoomContext),d component that will provide the context/data(RoomContextProvider)
// as well as the contextConsumer that will wrap any component that subscribe to the context

// Higher Order Component(HOC)
export function withRoomContextConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<RoomContextConsumer>
				{value => <Component {...props} context={value} />}
			</RoomContextConsumer>
		);
	};
}

export default RoomContextProvider;
