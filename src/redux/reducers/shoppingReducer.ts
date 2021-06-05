import { AnyAction } from 'redux';
import {
	ICategory,
	IItem,
	IItemByCategory,
} from '../../interfaces/shopping.interface';
import types from '../types';

const initialState = {
	items: [],
	categories: [],
	currentItem: null,
	searchTerm: '',
	isLoading: true,
	isLoadingCategories: true,
};

const shoppingReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.SHOPPING_SET_CATEGORIES_LOADING:
			return {
				...state,
				isLoadingCategories: action.payload,
			};
		case types.SHOPPING_SAVE_CATEGORIES:
			return {
				...state,
				categories: action.payload,
				isLoadingCategories: false,
			};
		case types.SHOPPING_ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
				isLoadingCategories: false,
			};
		case types.SHOPPING_SEARCH_ITEMS:
			return {
				...state,
				searchTerm: action.payload,
			};
		case types.SHOPPING_ADD_ITEM: {
			const categoryIndex = state.categories.findIndex(
				(cat: ICategory) => cat.category === action.payload.category
			);
			const items: IItemByCategory[] = [...state.items];
			if (items[categoryIndex]) {
				items[categoryIndex].items = [
					...items[categoryIndex].items,
					action.payload,
				];
				return {
					...state,
					items,
				};
			}
			// Cuando la categoría es nueva se agrega al arreglo
			return {
				...state,
				items: [
					...items,
					{
						category: action.payload.category,
						items: [action.payload],
					},
				],
			};
		}

		case types.SHOPPING_SAVE_ITEMS: {
			const newItems = action.payload.categories.map((cat: ICategory) => {
				return {
					category: cat.category,
					items: action.payload.items.filter(
						(item: IItem) => item.category === cat.category
					),
				};
			});
			const items = newItems.filter(
				(item: IItemByCategory) => item.items.length > 0
			);
			return {
				...state,
				isLoading: false,
				isLoadingCategories: false,
				categories: action.payload.categories,
				items,
			};
		}

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
				items: state.items.map((cat: IItemByCategory) => {
					if (action.payload.category !== cat.category) return cat;
					return {
						category: cat.category,
						items: cat.items.map((item: IItem) =>
							item._id === action.payload._id
								? action.payload
								: item
						),
					};
				}),
			};
		case types.SHOPPING_DELETE_ITEM: {
			// Elimina el item dentro de la categoría
			const newItems = state.items.map((cat: IItemByCategory) => {
				if (action.payload.category !== cat.category) return cat;
				return {
					category: cat.category,
					items: cat.items.filter(
						(item: IItem) => item._id !== action.payload._id
					),
				};
			});

			// Elimina la categoría si ya no tiene items
			const items = newItems.filter(
				(item: IItemByCategory) => item.items.length > 0
			);
			return {
				...state,
				items,
				currentItem: null,
			};
		}

		default:
			return state;
	}
};

export default shoppingReducer;
