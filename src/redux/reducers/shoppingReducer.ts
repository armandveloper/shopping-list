import types from '../types';

const initialState = {
	items: [],
	categories: [],
};

const shoppingReducer = (
	state = initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		case types.SHOPPING_SAVE_CATEGORIES:
			return { ...state, categories: action.payload };
		case types.SHOPPING_ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			};
		default:
			return state;
	}
};

export default shoppingReducer;
