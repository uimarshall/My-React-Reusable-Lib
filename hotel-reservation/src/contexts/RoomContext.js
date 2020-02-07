import React, { createContext } from "react";

export const RoomContext = createContext();

const RoomContextProvider = props => {
	return <RoomContext.Provider>{props.children}</RoomContext.Provider>;
};

export default RoomContextProvider;
