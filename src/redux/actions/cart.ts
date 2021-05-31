import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { CartState } from '../store';
import types from '../types';
import { fetchWithToken } from '../../helpers/fetch';

const setCartLoading = (isLoading: boolean = true) => ({
	type: types.CART_SET_LOADING,
	payload: isLoading,
});

export const startGetCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (id?: string) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = id ? `cart/${id}` : 'cart';
		try {
			const res = await fetchWithToken(url);
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(getCart(data.cart));
		} catch (err) {
			dispatch(setCartLoading(false));
			toast.error(err.message);
		}
	};
};

const getCart = (cart: any) => ({
	type: types.CART_GET,
	payload: cart,
});

export const addItemToCart = (item: any) => ({
	type: types.CART_ADD_ITEM,
	payload: item,
});
