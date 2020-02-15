import styled from "styled-components";
import defaultBgimg from "../../images/room-1.jpg";

const StyledHero = styled.header `
	min-height: 60vh;
	background: url(${props => (props.img ? props.img : defaultBgimg)})
		center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default StyledHero;