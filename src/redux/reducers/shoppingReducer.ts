import types from '../types';

const initialState = {
	items: [],
	categories: [],
	currentItem: null,
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
		case types.SHOPPING_ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case types.SHOPPING_SAVE_ITEMS:
			return {
				...state,
				items: action.payload,
			};
		case types.SHOPPING_SHOW_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		case types.SHOPPING_HIDE_ITEM:
			return {
				...state,
				currentItem: null,
			};
		case types.SHOPPING_UPDATE_ITEM:
			return {
				...state,
				items: state.items.map((item: any) =>
					item._id === action.payload._id ? action.payload : item
				),
			};
		case types.SHOPPING_DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(
					(item: any) => item._id !== action.payload
				),
				currentItem: null,
			};
		default:
			return state;
	}
};

export default shoppingReducer;
