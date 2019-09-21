import styled from 'styled-components';

export const Banner = styled.div`
	height: 200px;
	//border: 1px solid red;
	background-image: url(img/burg.jpg);
	margin-bottom: 60px;
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	//filter: grayscale(.5);
	&:after {
		position: absolute;
		content: "";
		height:240px;
		width: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 0.65) 100%);
	}
`;
