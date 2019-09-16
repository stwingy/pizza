import React from 'react'
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from './Card'
import {foods} from '../data/FoodData'
import uuid from 'uuid'
const StyledRoot = styled.div`
//margin: 0 40% 50px 20px;
	height: 1000px;
`
const StyledContainer = styled.div`
// max-width: 550px;
// width: 100%;
// margin: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:1em;`

function CardParent() {
    const date = new Date().toLocaleDateString()
    const onCommentClick = () => alert('You clicked comments')
    const onLikesClick = () => alert('You clicked comments')
    const onViewsClick = () => alert('You clicked comments')
    const buttons = [
      {
        label: (
          <>
            <FaCommentAlt /> 0 Comments
          </>
        ),
        onClick: onCommentClick,
      },
      {
        label: (
          <>
            <FaThumbsUp /> 242 Likes
          </>
        ),
        onClick: onLikesClick,
      },
      {
        label: (
          <>
            <FaRegEye /> 187288 Views
          </>
        ),
        onClick: onViewsClick,
      },
    ]

    return (
        <StyledRoot>
          {Object.entries(foods).map(([key,value])=>(
			<React.Fragment  key ={uuid()}>
			<h1>{key}</h1>
        <StyledContainer>
          {value.map(food=>(
      <Card
      key ={uuid()}
      title={food.name}
      date={date}
      description="Green apples have a high fiber content which helps in increasing the
  body's metabolism. While consuming an apple, make sure that you're not
  tossing the peel in the trash. Consuming apple with its peel improves
  the overall health. Due to its high fiber content, apple helps in
  detoxification process. It keeps the liver and digestive system away
  from harmful elements."
  col="white"
  src={food.img}
      actions={buttons}
    />
          ))}
    
        </StyledContainer>
        </React.Fragment>
		))}
      </StyledRoot>
    
    )
}

export default CardParent
