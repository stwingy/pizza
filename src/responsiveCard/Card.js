import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
function Card({ title, date, description, col, src, comments, likes, views, actions }) {
	const StyledC = styled.div`
		border: 1px solid white;
		padding: 25px 12px 18px;
		background: linear-gradient(45deg, green, blue);
		max-width: 300px;
	`;
	const StyledPhoto = styled.div`
		height: 200px;
		background-image: ${(props) => `url(${props.src})`};
		background-size: cover;
		background-position: center;
		filter: grayscale(.5);
		border: ${(props) => `1px solid ${props.col}`};
	`;
	const Title = styled.h2`
		color: #fff;
		font-weight: 300;
		@media (max-width: 500px) {
			font-size: 1rem;
		}
	`;
	const Date = styled.div`
		color: #ccc;
		font-weight: 300;
		margin: 6px 0;
		@media (max-width: 500px) {
			font-size: 0.8rem;
		}
	`;
	const Description = styled.p`
		color: #fff;
		font-weight: 300;
		@media (max-width: 500px) {
			font-size: 0.75rem;
		}
	`;
	const Actions = styled.div`
		color: #333;
		display: flex;
		align-items: center;
		svg {
			transform: translateY(-2px);
			margin-right: 5px;
		}
		@media (max-width: 500px) {
			flex-direction: column;
			& button {
				width: 100%;
				margin-bottom: 4px;
				font-size: 0.65rem;
			}
		}
	`;
	const Action = styled.button`
		margin: 0 5px;
		padding: 8px 14px;
		background: rgba(155, 155, 155, 0.2);
		color: #fff;
		cursor: pointer;
		border: 1px solid #fff;
		outline: 0;
		font-weight: 300;
		:hover {
			opacity: 0.8;
		}
		:active {
			background: green;
		}
	`;

	return (
		<StyledC>
			<StyledPhoto col={col} src={src} />
			<Title>{title}</Title>
			<Date>{date}</Date>
			<Description>{description}</Description>
			<Actions>
				{actions.map((a) => (
					<Action key={uuid()} onClick={a.onClick}>
						{a.label}
					</Action>
				))}
			</Actions>
		</StyledC>
	);
}

export default Card;
