import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../styles/colors';
import { Title } from '../styles/Title';
const NavbarStyled = styled.div`
	background-color: ${pizzaRed};
	//background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,52,1) 38%, rgba(0,255,235,1) 100%);
	padding: 10px;
	position: fixed;
	width: 100%;
	z-index: 100;
`;
const Logo = styled(Title)`
font-size: 20px;
color: white;
text-shadow: 1px 1px 4px black;
`;
function Navbar() {
	return (
		<NavbarStyled>
			<Logo>
				SliceLine{' '}
				<span role="img" aria-label="Snowman">
					🍪
				</span>
			</Logo>
		</NavbarStyled>
	);
}

export default Navbar;
