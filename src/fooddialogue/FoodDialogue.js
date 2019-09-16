import React from 'react'
import styled from 'styled-components'
import {FoodLabel} from '../menu/FoodGrid'
import {pizzaRed} from '../styles/colors'
import {Title} from '../styles/Title'
import {formatPrice} from '../data/FoodData'
const Dialogue = styled.div `
width:500px;
position:fixed;
top:75px;
background-color:white;
z-index:6;
//height:500px;
left: calc(50% - 250px);
max-height: calc(100% - 100px);
display:flex;
flex-direction:column;
`
const DialogueShadow = styled.div `
position:fixed;
top:0;
width:100%;
height:100%
background-color:black;
opacity:.7;
z-index:5;`

const DialogueBanner = styled.div `
min-height: 200px;
margin-bottom: 20px;
${(props)=>`background-image: url(${props.img})`};
background-size:cover;
background-position:center;
`
const DialogueBannerName = styled(FoodLabel) `
top:80px;
font-size:30px;
padding:5px 40px;
`
export const DialogueContent = styled.div `
overflow:auto;
min-height:50px;
`
export const DialogueFooter = styled.div `
box-shadow:0 -2px 10px 0 grey;
height:60px;
display:flex;
justify-content:center;
`
export const ConfirmButton =styled(Title) `
margin:10px;
color:white;
border-radius: 5px;
height:20px;
padding:10px;
text-align:center;
width:200px;
cursor:pointer;
background-color:${pizzaRed};
`
function FoodDialogue(props) {
    
    function close(){
        props.setOpenFood("")
    }

    if(!props.openFood) return null

    const order = {...props.openFood}
    function addToOrder(){
       
       props.setOrders([...props.orders,order])
       close()
    }
    return (
      
        <>
           <DialogueShadow onClick ={close}/>
           <Dialogue>
               <DialogueBanner img={props.openFood.img}>
               <DialogueBannerName>{props.openFood.name}</DialogueBannerName>
               </DialogueBanner>
               <DialogueContent></DialogueContent>
               <DialogueFooter>
                   <ConfirmButton onClick ={addToOrder}>Add to Order: {formatPrice(props.openFood.price)}</ConfirmButton>
                   </DialogueFooter>
               </Dialogue>
        </>
    )
}

export default FoodDialogue
