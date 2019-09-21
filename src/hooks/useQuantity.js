import { useState } from 'react';

export function useQuantity(defaultQuantity = 1) {
	const [ value, setValue ] = useState(defaultQuantity);

	function onChange(e) {
		if (!(+e.target.value >= 1)) {
			setValue(1);
			return;
		}
		setValue(+e.target.value);
	}
	return {
		value,
		setValue,
		onChange
	};
}
