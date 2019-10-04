export function formatPrice(price) {
	return price.toLocaleString('en', {
		style: 'currency',
		currency: 'GBP'
	});
}

const foodItems = [
	{ name: 'Margherita Pizza', img: '/img/marg.jpg', section: 'Pizza', price: 3.50 },
	{ name: 'Fungi Pizza', img: '/img/mushroom.jpg', section: 'Pizza', price: 3.75 },
	{ name: 'Seafood Pizza', img: '/img/fishp.jpg', section: 'Pizza', price: 3.85 },
	{ name: 'Mediteranean Pizza', img: '/img/mediteranean.jpg', section: 'Pizza', price: 3.90 },
	{ name: 'Pepperoni Pizza', img: '/img/peperoni.jpg', section: 'Pizza', price: 3.80 },
	{ name: 'Pepperoni/Salami Pizza', img: '/img/pep-salami.jpg', section: 'Pizza', price: 3 },
	{ name: 'Special Pizza', img: '/img/pizzaspecial.jpg', section: 'Pizza', price: 5.00 },
	{ name: 'Veggi Pizza', img: '/img/vegetablepizza.jpg', section: 'Pizza', price: 3.60 },
	{ name: 'Cheese Burger', img: '/img/basiccheese.jpg', section: 'Burgers', price: 3.85 },

	{ name: 'Chicken kebab', img: '/img/chickend.jpg', section: 'Kebabs', price: 3.80 },
	{ name: 'Chicken Burito', img: '/img/burrito.jpg', section: 'Other', price: 3.90 },
	{ name: 'Chips', img: '/img/chips.jpg', section: 'Sides', price: 3.00 },
	{ name: 'Delux Cheese Burger', img: '/img/deluxcheeseburger.jpg', section: 'Burgers', price: 5 },
	{ name: 'Special Cheese Burger', img: '/img/sc.jpg', section: 'Burgers', price: 4.60 },
	{ price: 1.00, name: 'Soft Drink', section: 'Drinks', choices: ['Coke', 'Sprite', 'Tango'] }
];
export const foods = foodItems.reduce((acc, cur) => {
	if (!acc[cur.section]) {
		acc[cur.section] = [];
	}
	acc[cur.section].push(cur);
	return acc;
}, {});
