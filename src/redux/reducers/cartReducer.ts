import { AnyAction } from 'redux';
import types from '../types';

const initialState = {
	name: 'Shopping List',
	user: '',
	isEditing: false,
	isLoading: true,
	items: [],
};

const shoppingReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.CART_SET_LOADING:
			return { ...state, isLoading: action.payload };
		case types.CART_ADD_ITEM: {
			const exists = state.items.some(
				(item: any) => item.name === action.payload.name
			);
			console.log('exists', exists);
			console.log('items state', state.items);
			const items = exists
				? state.items.map((item: any) =>
						item.name === action.payload.name
							? {
									...action.payload,
									quantity: item.quantity + 1,
							  }
							: item
				  )
				: [...state.items, action.payload];
			console.log(items);
			return { ...state, isEditing: true, items };
		}

		case types.CART_GET:
			return { ...state, isLoading: false, ...action.payload };
		default:
			return state;
	}
};

export default shoppingReducer;
