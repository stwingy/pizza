import React from 'react';
import styled from 'styled-components';
import { Title } from '../styles/Title';
import { pizzaRed } from '../styles/colors';
const QuantityInputStyled = styled.input`
	font-size: 18px;
	border: none;
	outline: none;
	width: 24px;
	text-align: center;
`;
const IncrementContainer = styled(Title)`
display:flex;
`;
const IncrementButton = styled.div`
	width: 23px;
	color: ${pizzaRed};
	font-size: 20px;
	text-align: center;
	padding: -12px;
	line-height: 23px;
	margin: 0 10px;

	border: 1px solid ${pizzaRed};
	${(props) =>
		props.disabled &&
		`
opacity:.5;
pointer-events:none;`} &:hover {
		background-color: #ffe3e3;
	}
`;
function QuantityInput({ quantity }) {
	return (
		<IncrementContainer>
			<div>quantity</div>
			<IncrementButton disabled={quantity.value === 1} onClick={() => quantity.setValue(quantity.value - 1)}>
				-
			</IncrementButton>
			<QuantityInputStyled {...quantity} />
			<IncrementButton onClick={() => quantity.setValue(quantity.value + 1)}>+</IncrementButton>
		</IncrementContainer>
	);
}

export default QuantityInput;
