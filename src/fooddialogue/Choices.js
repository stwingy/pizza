import React from 'react'
import styled from 'styled-components'

const cursorPointer = ` cursor:pointer;`
const RadioInput = styled.input`
${cursorPointer}`
const Label = styled.label`
${cursorPointer}`
function Choices({ openFood, choiceRadio }) {
    return (
        <>
            <h3>Select from the following</h3>
            {openFood.choices.map((choice, i) => (
                <React.Fragment key={i}>
                    <RadioInput

                        type="radio"
                        id={choice}
                        name="choice"
                        value={choice}
                        checked={choiceRadio.value === choice}
                        onChange={choiceRadio.onChange} />

                    <Label htmlFor={choice}>{choice}</Label>{" "}
                </React.Fragment>
            ))}
        </>
    )
}

export default Choices
