import React from 'react';
//https://pizza-ec68c.firebaseapp.com
import Navbar from './navbar/Navbar';
import { Banner } from './banner/Banner';
import Menu from './menu/Menu';
import FoodDialogue from './fooddialogue/FoodDialogue';
import Order from './order/Order';
import CardParent from './responsiveCard/CardParent';
import { GlobalStyle } from './styles/GlobalStyle';
import { useOpenFood } from './hooks/useOpenFood';
import { useOrders } from './hooks/useOrders';
import { useTitle } from './hooks/useTitle';
import Footer from './Footer'
import OrderDialogue from './order/OrderDialogue'
import { useAuthentication } from './hooks/useAuthentication'
import { useOrderDialogue } from './hooks/useOrderDialogue'
//const database = window.firebase.database()
function App() {
	const { openFood, setOpenFood } = useOpenFood();
	const orders = useOrders();
	useTitle(openFood, { ...orders });
	const auth = useAuthentication()
	const orderDialogue = useOrderDialogue()
	return (
		<>
			<>
				<div
					style={{
						backgroundImage: 'url(img/banner.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						position: 'fixed',
						top: 0, left: 0,
						width: '100%', height: '100vh',
						filter: 'grayscale(1)',
						// opacity:'.3',
						zIndex: '-10'
					}}
				>
				</div>
				<OrderDialogue{...orders} {...orderDialogue}></OrderDialogue>
				<FoodDialogue openFood={openFood} setOpenFood={setOpenFood} {...orders} />
				<Navbar {...auth} />
				<Order {...orders} setOpenFood={setOpenFood} {...auth} {...orderDialogue} />
				<div className="filter">
					<Banner />
				</div>

				<Menu setOpenFood={setOpenFood} />
				<Footer />
				{/* <CardParent/> */}

				<GlobalStyle />
			</>

		</>
	);
}

export default App;
