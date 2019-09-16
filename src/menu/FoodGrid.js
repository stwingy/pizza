import styled from 'styled-components';
import { Title } from '../styles/Title';
export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	align-items: center;
`;
export const FoodLabel = styled(Title)`
	position: absolute;

	padding: 5px;
	background-color: rgba(255, 255, 255, .5);
`;
export const Food = styled.div`
	height: 100px;
	background-image: ${(props) => `url(${props.img})`};
	background-size: cover;
	background-position: center;
	filter: grayscale(.5);
	padding: 1em;
	border-radius: .5em;
	margin-top: 5px;
	box-shadow: 0 0 2px 0 grey;
	transition: all .2s ease-in;
	&:hover {
		cursor: pointer;
		box-shadow: 0 5px 10px 0 black;
		filter: grayscale(0);
		margin-top: 0;
		margin-bottom: 5px;
	}
`;
