import React from 'react';
import styled from 'styled-components';
import { ConfirmButton, DialogueFooter, DialogueContent } from '../fooddialogue/FoodDialogue';
import { formatPrice } from '../data/FoodData';
import { device } from '../styles/device'
import { pizzaRed } from '../styles/colors'
let TOTAL = 0
const database = window.firebase.database()

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
	${({ editable }) => editable && `
	&:hover{
		cursor:pointer;
		background-color: #e7e7e7;
	}`}
`;
const OrderItem = styled.div`
	display: grid;
	grid-template-columns: 20px 145px 60px 10px ;
	align-items:center;
	justify-content: space-between;
	padding: 10px 10px;
`;
const DetailItem = styled.div`
	color: gray;
	font-size: 10px;
`;

function sendOrder(orders, { email, displayName }) {

	var newOrderRef = database.ref("orders").push();
	const newOrders = orders.map(order => {
		return Object.keys(order).reduce((acc, orderKey) => {
			if (!order[orderKey]) {
				// undefined value
				return acc;
			}
			if (orderKey === "toppings") {
				return {
					...acc,
					[orderKey]: order[orderKey]
						.filter(({ checked }) => checked)
						.map(({ name }) => name)
				};
			}
			return {
				...acc,
				[orderKey]: order[orderKey],
				total: TOTAL
			};
		}, {});
	});
	newOrderRef.set({
		order: newOrders,
		email,
		displayName
	});
}

function Order(props) {
	const { login, loggedIn, setOpenOrderDialogue } = props
	const toppingPrice = 1.5;
	function getPrice(order) {
		return order.quantity * (order.price + order.toppings.filter((t) => t.checked).length * toppingPrice);
	}
	const subtotal = props.orders.reduce((tot, cur) => {
		return tot + getPrice(cur);
	}, 0);
	const vat = subtotal * 0.15;
	const total = subtotal + vat;
	const deleteItem = index => {
		//console.log(index, props)
		const oldOrder = [...props.orders]
		oldOrder.splice(index, 1)
		props.setOrders(oldOrder)
	}
	return (
		<OrderStyled active={props.orders.length ? true : false}>
			{!props.orders.length ? (
				<OrderContent>Order is empty</OrderContent>
			) : (
					<OrderContent>
						<OrderContainer >Your Order:</OrderContainer>
						{props.orders.map((o, index) => (
							<OrderContainer editable key={index}>
								<OrderItem onClick={() => props.setOpenFood({ ...o, index })}>
									<div>{o.quantity}</div>
									<div>{o.name}</div>
									<div>{formatPrice(getPrice(o))}</div>
									<div style={{ cursor: 'pointer' }} onClick={(e) => {
										e.stopPropagation()
										deleteItem(index)
									}}>
										<img src={`https://icon.now.sh/delete/${pizzaRed}`} alt="aa" className="delimg" /></div>


								</OrderItem>
								<DetailItem>
									{o.toppings.filter((t) => t.checked).map((tp) => tp.name).join(', ')}
								</DetailItem>
								{o.choice && <DetailItem>{o.choice}</DetailItem>}
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
			{props.orders.length > 0 && <OrderFooter>
				<ConfirmButton onClick={() => {
					if (loggedIn) {
						TOTAL = formatPrice(total)
						setOpenOrderDialogue(true)
						sendOrder(props.orders, loggedIn)
					} else {
						login()
					}
				}}>
					Checkout
					</ConfirmButton>
			</OrderFooter>}
		</OrderStyled>
	);
}

export default Order;
