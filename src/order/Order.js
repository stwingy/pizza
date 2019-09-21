import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogueFooter, DialogueContent } from '../fooddialogue/FoodDialogue';
import { formatPrice } from '../data/FoodData';
import { device } from '../styles/device'
const OrderStyled = styled.div`
	position: fixed;

	right: ${(props) => (props.active ? 0 : `-300px`)};
	transition: right .4s ease-in;
	top: 48px;
	width: 300px;
	height: calc(100% - 100px);
	background-color: white;
	box-shadow: 4px 0px 5px 4px grey;
	z-index: 7;
	display: flex;
	flex-direction: column;
	/* @media (max-width: 600px) {
    width:250px;
  } */
  ${device.tablet`
   width:250px;
  `} 
  
`;
const OrderContent = styled(DialogueContent)`
height: 100%;
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
	grid-template-columns: 20px 150px 5px 60px;
	justify-content: space-between;
	padding: 10px 0;
`;
const DetailItem = styled.div`
	color: gray;
	font-size: 10px;
`;
function Order(props) {
	const toppingPrice = 1.5;
	function getPrice(order) {
		return order.quantity * (order.price + order.toppings.filter((t) => t.checked).length * toppingPrice);
	}
	const subtotal = props.orders.reduce((tot, cur) => {
		return tot + getPrice(cur);
	}, 0);
	const vat = subtotal * 0.15;
	const total = subtotal + vat;
	return (
		<OrderStyled active={props.orders.length ? true : false}>
			{!props.orders.length ? (
				<OrderContent>Order is empty</OrderContent>
			) : (
					<OrderContent>
						<OrderContainer>Your Order:</OrderContainer>
						{props.orders.map((o) => (
							<OrderContainer>
								<OrderItem>
									<div>{o.quantity}</div>
									<div>{o.name}</div>
									<div />

									<div>{formatPrice(getPrice(o))}</div>
								</OrderItem>
								<DetailItem>
									{o.toppings.filter((t) => t.checked).map((tp) => tp.name).join(', ')}
								</DetailItem>
							</OrderContainer>
						))}
						<OrderContainer>
							<OrderItem>
								<div />
								<div>Sub-total</div>
								<div>{formatPrice(subtotal)}</div>
							</OrderItem>
							<OrderItem>
								<div />
								<div>V.A.T</div>
								<div>{formatPrice(vat)}</div>
							</OrderItem>
							<OrderItem>
								<div />
								<div>Total</div>
								<div>{formatPrice(total)}</div>
							</OrderItem>
						</OrderContainer>
					</OrderContent>
				)}
			<OrderFooter>
				<ConfirmButton>Checkout</ConfirmButton>
			</OrderFooter>
		</OrderStyled>
	);
}

export default Order;
