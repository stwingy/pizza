import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { foods, formatPrice } from '../data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { Title } from '../styles/Title';
import { pizzaRed } from '../styles/colors';
const MenuStyled = styled.div`
	//border: 2px solid black;
	margin: 0 40% 50px 0px;

	background-color: rgba(255, 355, 255, .5);
`;
const H1Stled = styled(Title)`
color:${pizzaRed};
font-size: 25px;
margin:20px 0px;
margin-top:40px;
background: ${pizzaRed};
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #af7a18, 0 0 30px #e2ff18, 0 0 40px #ff9a18, 0 0 55px #e8e60a, 0 0 75px rgba(243, 12, 12, 0.65);
`;
//the click handler needs sorting out
function Menu({ setOpenFood }) {
	return (
		<MenuStyled>
			{Object.entries(foods).map(([key, value]) => (
				<React.Fragment key={uuid()}>
					<H1Stled>{key}</H1Stled>

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
