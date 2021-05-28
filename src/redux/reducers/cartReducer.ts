import types from '../types';

const initialState = {
	name: 'Shopping List',
	user: '',
	isEditing: false,
	items: [],
};

const shoppingReducer = (
	state = initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shoppingReducer;
