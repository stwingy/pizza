import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { foods, formatPrice } from '../data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
const MenuStyled = styled.div`
	//border: 2px solid black;
	margin: 0 40% 50px 20px;
	height: 1000px;
`;
function Menu({ setOpenFood }) {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([ key, value ]) => (
				<React.Fragment key={uuid()}>
					<h1>{key}</h1>

					<FoodGrid>
						{value.map((food) => (
							<Food key={uuid()} img={food.img} onClick={() => setOpenFood(food)}>
								<FoodLabel>
									<div>{food.name}</div>
									<div>{formatPrice(food.price)}</div>
								</FoodLabel>
							</Food>
						))}
					</FoodGrid>
				</React.Fragment>
			))}
		</MenuStyled>
	);
}

export default Menu;
