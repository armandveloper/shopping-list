import { AnyAction } from 'redux';
import types from '../types';

const initialState = {
	isEditMode: false,
	isLoading: true,
	cart: {
		_id: '',
		name: '',
		user: '',
		items: [],
	},
	unsavedCart: {
		_id: '',
		name: 'Shopping List',
		user: '',
		items: [],
	},
};

const shoppingReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.CART_SET_LOADING:
			return { ...state, isLoading: action.payload };
		case types.CART_ENABLE_EDIT_MODE:
			return { ...state, isEditMode: true };
		case types.CART_EXIT_EDIT_MODE:
			return {
				...state,
				isEditMode: false,
				unsavedCart: { ...state.cart },
			};
		case types.CART_GET:
			if (action.payload.cart) {
				return {
					...state,
					isLoading: false,
					cart: { ...action.payload.cart },
					unsavedCart: { ...action.payload.cart },
				};
			}
			return {
				...state,
				isLoading: false,
				cart: { ...state.cart, user: action.payload.user },
				unsavedCart: {
					...state.unsavedCart,
					user: action.payload.user,
				},
			};

		case types.CART_ADD_ITEM: {
			const exists = state.unsavedCart.items.some(
				(item: any) => item.name === action.payload.name
			);
			const items = exists
				? state.unsavedCart.items.map((item: any) =>
						item.name === action.payload.name
							? {
									...action.payload,
									quantity: item.quantity + 1,
							  }
							: item
				  )
				: [...state.unsavedCart.items, action.payload];
			return {
				...state,
				isEditMode: true,
				unsavedCart: { ...state.unsavedCart, items },
			};
		}
		case types.CART_SET_ITEM_QUANTITY: {
			return {
				...state,
				unsavedCart: {
					...state.unsavedCart,
					items: state.unsavedCart.items.map((item: any) =>
						item.item === action.payload.id
							? { ...item, quantity: action.payload.quantity }
							: item
					),
				},
			};
		}
		case types.CART_REMOVE_ITEM: {
			const items = state.unsavedCart.items.filter(
				(item: any) => item.item !== action.payload
			);
			return {
				...state,
				isEditMode: items.length > 0,
				unsavedCart: {
					...state.unsavedCart,
					items,
				},
			};
		}
		case types.CART_SAVE:
			return {
				...state,
				isLoading: false,
				isEditMode: false,
				cart: action.payload,
				unsavedCart: action.payload,
			};
		case types.CART_SAVE_ERROR:
			return {
				...state,
				isLoading: false,
				isEditMode: false,
				unsavedCart: action.payload,
			};
		default:
			return state;
	}
};

export default shoppingReducer;
