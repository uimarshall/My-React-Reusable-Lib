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

				{/* Room Price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/*  End Room Price */}
				{/* Room Size */}
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/*  End Room Size */}
				{/* extras */}
				<div className="form-group">
					{/* Breakfast */}
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					{/* Pets */}
					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/*end  extras */}
			</form>
		</section>
	);
};

export default RoomFilter;
