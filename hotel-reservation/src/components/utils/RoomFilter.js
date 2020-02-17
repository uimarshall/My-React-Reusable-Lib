import React, { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContext";
import SectionTitle from "./SectionTitle";

// Function to get Unique Item/unique type of room
const getUniqueItem = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		maxPrice,
		minPrice,
		maxSize,
		minSize,
		breakfast,
		pets
	} = context;

	// Get unique types
	let types = getUniqueItem(rooms, "type");

	// Add 'all'
	types = [...types, "all"];

	// map types to Jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	// Occupants capacity
	let occupants = getUniqueItem(rooms, "capacity");
	occupants = occupants.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<SectionTitle title="search rooms" />
			<form action="" className="filter-form">
				{/* Select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}>
						{types}
					</select>
				</div>
				{/* End select type */}
				{/* Guest  */}
				<div className="form-group">
					<label htmlFor="capacity">Guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}>
						{occupants}
					</select>
				</div>
				{/* End Guest */}
			</form>
		</section>
	);
};

export default RoomFilter;
