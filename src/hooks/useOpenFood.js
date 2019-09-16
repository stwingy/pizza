import React from 'react';
export const useOpenFood = function() {
	const [ openFood, setOpenFood ] = React.useState();
	return {
		openFood,
		setOpenFood
	};
};
