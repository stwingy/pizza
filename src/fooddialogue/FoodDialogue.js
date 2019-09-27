import React from 'react'
import styled from 'styled-components'
import { FoodLabel } from '../menu/FoodGrid'
import { pizzaRed } from '../styles/colors'
import { Title } from '../styles/Title'
import { formatPrice } from '../data/FoodData'
import QuantityInput from './QuantityInput'
import { useQuantity } from '../hooks/useQuantity'
import { useToppings } from '../hooks/useToppings'
import { useChoice } from '../hooks/useChoice'
import Toppings from './Toppings'
import Choices from './Choices'
const Dialogue = styled.div`
width:500px;
position:fixed;
top:75px;
background-color:white;
z-index:6000;
//height:500px;
left: calc(50% - 250px);
max-height: calc(100% - 100px);
display:flex;
flex-direction:column;
`
const DialogueShadow = styled.div`
position:fixed;
top:0;
width:100%;
height:100%
background-color:black;
opacity:.7;
z-index:5000;`

const DialogueBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
${(props) => props.img ? `background-image: url(${props.img})` : `min-height:75px`};
background-size:cover;
background-position:center;
`
const DialogueBannerName = styled(FoodLabel)`
top:80px;
${(props) => props.img ? `top:80px` : `top:20px`};
font-size:30px;
padding:5px 40px;
`
export const DialogueContent = styled.div`
overflow:auto;
min-height:50px;
padding: 0 40px;
padding-bottom:40px;
`
export const DialogueFooter = styled.div`
box-shadow:0 -2px 10px 0 grey;
height:60px;
display:flex;
justify-content:center;
`
export const ConfirmButton = styled(Title)`
margin:10px;
color:white;
border-radius: 5px;
height:20px;
padding:10px;
text-align:center;
width:200px;
cursor:pointer;
background-color:${pizzaRed};
${({ disabled }) => disabled && `
opacity: .5;
ponter-events: none;
background-color: grey;`}
`
function FoodDialogueContainer(props) {

    const quantity = useQuantity(props.openFood && props.openFood.quantity)
    const toppings = useToppings(props.openFood.toppings)
    const choiceRadio = useChoice(props.openFood.choice)

    function close() {
        props.setOpenFood("")
    }

    if (!props.openFood) return null

    const order = { ...props.openFood, quantity: quantity.value, toppings: toppings.toppings, choice: choiceRadio.value }
    const isEditing = props.openFood.index > -1
    function editOrder(newOrder) {
        const newOrders = [...props.orders]
        newOrders[props.openFood.index] = order
        props.setOrders(newOrders)
        close()
    }

    function addToOrder() {

        props.setOrders([...props.orders, order])
        close()
    }
    const toppingPrice = 1.50
    function getPrice(order) {
        return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * toppingPrice)
    }
    function hasToppings(food) {
        return (
            food.section === "Pizza"
        )
    }
    return (

        <>
            <DialogueShadow onClick={close} />
            <Dialogue>
                <DialogueBanner img={props.openFood.img}>
                    <DialogueBannerName>{props.openFood.name}</DialogueBannerName>
                </DialogueBanner>
                <DialogueContent>
                    <QuantityInput quantity={quantity} />
                    {hasToppings(props.openFood) && <>
                        <h3>Extra Toppings</h3>
                        <Toppings {...toppings} />
                    </>}
                    {props.openFood.choices && <Choices openFood={props.openFood} choiceRadio={choiceRadio} />}
                </DialogueContent>
                <DialogueFooter>
                    <ConfirmButton onClick={isEditing ? editOrder : addToOrder} disabled={props.openFood.choices && !choiceRadio.value}>
                        {isEditing ? 'Update Order: ' : 'Add to Order: '}{formatPrice(getPrice(order))}</ConfirmButton>
                </DialogueFooter>
            </Dialogue>
        </>
    )
}

function FoodDialogue(props) {
    if (!props.openFood) return null
    return <FoodDialogueContainer {...props} />
}

export default FoodDialogue
