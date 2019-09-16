import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogueFooter, DialogueContent } from '../fooddialogue/FoodDialogue';
import { formatPrice } from '../data/FoodData';
const OrderStyled = styled.div`
	position: fixed;
	right: 0;
	top: 48px;
	width: 340px;
	height: calc(100% - 48px);
	background-color: white;
	box-shadow: 4px 0px 5px 4px grey;
	z-index: 7;
	display: flex;
	flex-direction: column;
`;
const OrderContent = styled(DialogueContent)`
height:100%;
padding:20px;
`;
const OrderFooter = styled(DialogueFooter)`

`;
const OrderContainer = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid grey;
`;
const OrderItem = styled.div`
	display: grid;
	grid-template-columns: 20px 150px 20px 60px;
	justify-content: space-between;
	padding: 10px 0;
`;
function Order(props) {
	console.log(props.orders);
	return (
		<OrderStyled>
			{!props.orders.length ? (
				<OrderContent>Order is empty</OrderContent>
			) : (
				<OrderContent>
					<OrderContainer>Your Order:</OrderContainer>
					{props.orders.map((o) => (
						<OrderContainer>
							<OrderItem>
								<div>1</div>
								<div>{o.name}</div>
								<div />
								<div>{formatPrice(o.price)}</div>
							</OrderItem>
						</OrderContainer>
					))}
				</OrderContent>
			)}
			<OrderFooter>
				<ConfirmButton>Checkout</ConfirmButton>
			</OrderFooter>
		</OrderStyled>
	);
}

export default Order;
