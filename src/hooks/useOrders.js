import React from 'react';
export const useOrders = function() {
	const [ orders, setOrders ] = React.useState([]);
	return {
		orders,
		setOrders
	};
};
