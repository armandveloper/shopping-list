import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { RootState, CartState } from '../store';
import types from '../types';
import { fetchWithToken } from '../../helpers/fetch';

const setCartLoading = (isLoading: boolean = true) => ({
	type: types.CART_SET_LOADING,
	payload: isLoading,
});

export const enableEditMode = () => ({
	type: types.CART_ENABLE_EDIT_MODE,
});

export const exitEditMode = () => ({
	type: types.CART_EXIT_EDIT_MODE,
});

export const startGetCart: ActionCreator<
	ThunkAction<Promise<Action | void>, RootState, void, AnyAction>
> = (id?: string) => {
	return async (
		dispatch: Dispatch<Action>,
		getState
	): Promise<Action | void> => {
		const { uid: user } = getState().auth;
		dispatch(setCartLoading());
		const url = id ? `cart/${id}` : 'cart';
		try {
			const res = await fetchWithToken(url);
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(getCart({ cart: data.cart, user }));
		} catch (err) {
			toast.error(err.message);
			dispatch(getCart({ user }));
		}
	};
};

const getCart = (cartInfo: any) => ({
	type: types.CART_GET,
	payload: cartInfo,
});

export const addItemToCart = (item: any) => ({
	type: types.CART_ADD_ITEM,
	payload: item,
});

export const setItemQuantity = (id: string, quantity: number) => ({
	type: types.CART_SET_ITEM_QUANTITY,
	payload: { id, quantity },
});

export const startSaveCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (cart: any) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = 'cart';
		try {
			const res = await fetchWithToken(url, cart, 'POST');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(saveCart(data.cart));
		} catch (err) {
			toast.error(err.message);
			dispatch(saveCartError(cart));
		}
	};
};

export const startUpdateCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (cart: any) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = `cart/${cart._id}`;
		try {
			const res = await fetchWithToken(url, cart, 'PUT');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(saveCart(data.cart));
		} catch (err) {
			toast.error(err.message);
			dispatch(saveCartError(cart));
		}
	};
};

const saveCart = (cart: any) => ({
	type: types.CART_SAVE,
	payload: cart,
});

const saveCartError = (cart: any) => ({
	type: types.CART_SAVE_ERROR,
	payload: cart,
});

export const removeItem = (id: string) => ({
	type: types.CART_REMOVE_ITEM,
	payload: id,
});
