export function formatPrice(price) {
	return price.toLocaleString('en', {
		style: 'currency',
		currency: 'GBP'
	});
}

const foodItems = [
	{ name: 'Margherita', img: '/img/marg.jpg', section: 'Pizza', price: 3.5 },
	{ name: 'Fungi', img: '/img/mushroom.jpg', section: 'Pizza', price: 3.75 },
	{ name: 'Seafood', img: '/img/fishp.jpg', section: 'Pizza', price: 3.85 },
	{ name: 'Mediteranean', img: '/img/mediteranean.jpg', section: 'Pizza', price: 3.9 },
	{ name: 'Pepperoni', img: '/img/peperoni.jpg', section: 'Pizza', price: 3.8 },
	{ name: 'Pepperoni/Salami', img: '/img/pep-salami.jpg', section: 'Pizza', price: 3 },
	{ name: 'Special', img: '/img/pizzaspecial.jpg', section: 'Pizza', price: 5 },
	{ name: 'Veggi', img: '/img/vegetablepizza.jpg', section: 'Pizza', price: 3.6 },
	{ name: 'Cheese Burger', img: '/img/basiccheese.jpg', section: 'Burgers', price: 3.85 },

	{ name: 'Chicken kebab', img: '/img/chickend.jpg', section: 'Kebabs', price: 3.8 },
	{ name: 'Chicken Buurito', img: '/img/burrito.jpg', section: 'Other', price: 3.9 },
	{ name: 'Chips', img: '/img/chips.jpg', section: 'Sides', price: 3 },
	{ name: 'Delux Cheese Burger', img: '/img/deluxcheeseburger.jpg', section: 'Burgers', price: 5 },
	{ name: 'Special Cheese Burger', img: '/img/sc.jpg', section: 'Burgers', price: 4.6 },
	{ price: 1, name: 'Soft Drink', section: 'Drinks', choices: ['Coke', 'Sprite', 'Tango'] }
];
export const foods = foodItems.reduce((acc, cur) => {
	if (!acc[cur.section]) {
		acc[cur.section] = [];
	}
	acc[cur.section].push(cur);
	return acc;
}, {});
