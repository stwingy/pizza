import React from 'react';
import styled from 'styled-components';

const ToppingGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
const ToppingCheckbox = styled.input`
	margin-right: 10px;
	cursor: pointer;
`;
const CheckboxLabel = styled.label`cursor: pointer;`;
function Toppings({ checkTopping, toppings }) {
	return (
		<ToppingGrid>
			{toppings.map((topping, i) => (
				<CheckboxLabel>
					<ToppingCheckbox type="checkbox" checked={topping.checked} onChange={() => checkTopping(i)} />
					{topping.name}
				</CheckboxLabel>
			))}
		</ToppingGrid>
	);
}

export default Toppings;
