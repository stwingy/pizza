import React from 'react';

import Navbar from './navbar/Navbar'
import {Banner} from './banner/Banner'
import Menu from './menu/Menu'
import FoodDialogue from './fooddialogue/FoodDialogue'
import Order from './order/Order'
import CardParent from './responsiveCard/CardParent'
import {GlobalStyle} from './styles/GlobalStyle'
import {useOpenFood} from './hooks/useOpenFood'
import {useOrders} from './hooks/useOrders'
import {useTitle} from './hooks/useTitle'
function App() {
  const {openFood,setOpenFood} = useOpenFood()
  const orders = useOrders()
  useTitle(openFood,{...orders})
  return (
    <>
    <FoodDialogue openFood = {openFood} setOpenFood={setOpenFood} {...orders}/>
    <Navbar/> 
    <Order {...orders}/>
    <Banner />
    
    <Menu setOpenFood={setOpenFood}/>
    <CardParent/>
    
      <GlobalStyle />
       
    </>
  );
}

export default App;