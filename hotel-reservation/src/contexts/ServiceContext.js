import React, { createContext, useState } from "react";
import uuid from "uuid/v1";
import { FaCocktail, FaHiking } from "react-icons/fa";
export const ServiceContext = createContext();

const ServiceContextProvider = props => {
	const [services, setService] = useState([
		{
			icon: <FaCocktail />,
			title: "awesome chef",
			info:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit.",
			id: uuid()
		},
		{
			icon: <FaCocktail />,
			title: "tour our cafe",
			info:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit.",
			id: uuid()
		},
		{
			icon: <FaCocktail />,
			title: "next to none!",
			info:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit.",
			id: uuid()
		},
		{
			icon: <FaHiking />,
			title: "best ever!",
			info:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugit.",
			id: uuid()
		}
	]);
	return (
		// What is passed to the value pty must be a particular dataType
		<ServiceContext.Provider value={{ services }}>
			{props.children}
		</ServiceContext.Provider>
	);
};

export default ServiceContextProvider;
