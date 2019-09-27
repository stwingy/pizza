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
	display:flex;
	justify-content:space-between;
`;
const Logo = styled(Title)`
font-size: 20px;
color: white;
text-shadow: 1px 1px 4px black;
`;

const UserStatus = styled.div`
color:white;
margin-right:30px;
font-size:12px;
`

const LoginButton = styled.span`
cursor:pointer;
`
function Navbar({ login, loggedIn, logout }) {
	return (
		<NavbarStyled>
			<Logo>
				SliceLine{' '}
				<span role="img" aria-label="Snowman">
					🍪
				</span>
			</Logo>
			<UserStatus>
				{loggedIn !== "loading" ? (<>
					{loggedIn ? `${loggedIn.displayName}  ` : ""}
					{loggedIn ? (<LoginButton onClick={logout}>log out</LoginButton>) :
						<LoginButton onClick={login}>Log in / Sign up</LoginButton>
					}
				</>
				) : ("loading")}

			</UserStatus>
		</NavbarStyled>
	);
}

export default Navbar;
