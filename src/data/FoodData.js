export function formatPrice(price) {
	return price.toLocaleString('en', {
		style: 'currency',
		currency: 'GBP'
	});
}

const foodItems = [
	{ name: 'Comfortable', img: '/img/i1.jpg', section: 'First', price: 1 },
	{ name: 'With Josephine', img: '/img/i2.jpg', section: 'First', price: 2 },
	{ name: 'Beaming', img: '/img/i3.jpg', section: 'First', price: 1 },
	{ name: 'Churching with Maureen', img: '/img/i4.jpg', section: 'First', price: 1 },
	{ name: 'Studying', img: '/img/i5.jpg', section: 'Second', price: 5 },
	{ name: 'Cool', img: '/img/i6.jpg', section: 'Second', price: 3 },
	{ name: 'Foutain', img: '/img/i7.png', section: 'Third', price: 5 },
	{ name: 'Church', img: '/img/i8.jpg', section: 'Third', price: 7 }
];
export const foods = foodItems.reduce((acc, cur) => {
	if (!acc[cur.section]) {
		acc[cur.section] = [];
	}
	acc[cur.section].push(cur);
	return acc;
}, {});
