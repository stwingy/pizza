import { useState } from 'react';

export function useToppings(defaultToppings) {
	const [ toppings, setToppings ] = useState(defaultToppings || getDefaultToppings());

	function checkTopping(index) {
		const newToppings = [ ...toppings ];
		newToppings[index].checked = !newToppings[index].checked;
		setToppings(newToppings);
	}
	return { checkTopping, toppings };
}
const toppingsList = [
	'extra Cheese',
	'Pepperoni',
	'Sausage',
	'Onions',
	'Peppers',
	'Pineapple',
	'Ham',
	'Spinach',
	'Artichokes',
	'Mushrooms',
	'Anchovies'
];
function getDefaultToppings() {
	return toppingsList.map((topping) => ({
		name: topping,
		checked: false
	}));
}
