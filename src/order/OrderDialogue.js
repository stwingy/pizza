import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../styles/colors'
import { Title } from '../styles/Title'

const Dialogue = styled.div`
width:500px;
position:fixed;
top:75px;
background-color:white;
z-index:6001;
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
z-index:5001;`

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
function OrderDialogue({ openOrderDialogue, setOpenOrderDialogue, setOrders }) {

    return openOrderDialogue ? <>
        <DialogueShadow />
        <Dialogue>
            <DialogueContent>
                <h2><span role="img" aria-label="truck">🚚</span>Your order is on the way.</h2>
                <p>Check email for order confirmation.</p>
            </DialogueContent>
            <DialogueFooter>
                <ConfirmButton onClick={() => {
                    setOrders([])
                    setOpenOrderDialogue(false)
                }}>
                    I`m still Hungry!
    </ConfirmButton>
            </DialogueFooter>
        </Dialogue>
    </> : <div></div>


}

export default OrderDialogue
