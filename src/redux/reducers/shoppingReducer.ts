import { AnyAction } from 'redux';
import types from '../types';

const initialState = {
	items: [],
	categories: [],
	currentItem: null,
};

const shoppingReducer = (state = initialState, action: AnyAction) => {
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
				categories: action.payload.categories,
				items: action.payload.categories.map((cat: any) => {
					return {
						category: cat.category,
						items: action.payload.items.filter(
							(item: any) => item.category === cat.category
						),
					};
				}),
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
				items: state.items.map((cat: any) => {
					if (action.payload.category !== cat.category) return cat;
					return {
						category: cat.category,
						items: cat.items.map((item: any) =>
							item._id === action.payload._id
								? action.payload
								: item
						),
					};
				}),
			};
		case types.SHOPPING_DELETE_ITEM:
			return {
				...state,
				items: state.items.map((cat: any) => {
					if (action.payload.category !== cat.category) return cat;
					return {
						category: cat.category,
						items: cat.items.filter(
							(item: any) => item._id !== action.payload._id
						),
					};
				}),
				currentItem: null,
			};
		default:
			return state;
	}
};

export default shoppingReducer;
