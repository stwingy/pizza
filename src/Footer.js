import React from 'react'
import styled from 'styled-components'
const FooterStyled = styled.div`
	background-color: gray;
	//background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,52,1) 38%, rgba(0,255,235,1) 100%);
	padding: 10px;
    position: fixed;
    bottom:0;
	width: 100%;
    z-index: 100;
    height:30px;
`;

function Footer() {
    return (
        <FooterStyled />
    )
}

export default Footer
