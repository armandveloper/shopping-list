import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { RootState, CartState } from '../store';
import types from '../types';
import {
	ICartResponse,
	IBaseCart,
	ICart,
	IBaseCartItem,
} from '../../interfaces/cart.interface';
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
			const data: ICartResponse = await res.json();
			if (!data.success) {
				return dispatch(getCart({ user }));
			}
			dispatch(getCart({ cart: data.cart }));
		} catch (err) {
			toast.error(err.message);
			dispatch(getCart({ user }));
		}
	};
};

const getCart = (cartInfo: { cart?: ICart; user?: string }) => ({
	type: types.CART_GET,
	payload: cartInfo,
});

export const addItemToCart = (item: IBaseCartItem) => ({
	type: types.CART_ADD_ITEM,
	payload: item,
});

export const setItemQuantity = (id: string, quantity: number) => ({
	type: types.CART_SET_ITEM_QUANTITY,
	payload: { id, quantity },
});

export const startSaveCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (cart: IBaseCart) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		try {
			const res = await fetchWithToken('cart', cart, 'POST');
			const data: ICartResponse = await res.json();
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
> = (cart: ICart) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = `cart/${cart._id}`;
		try {
			const res = await fetchWithToken(url, cart, 'PUT');
			const data: ICartResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(saveCart(data.cart));
		} catch (err) {
			toast.error(err.message);
			dispatch(saveCartError(cart));
		}
	};
};

const saveCart = (cart: ICart) => ({
	type: types.CART_SAVE,
	payload: cart,
});

const saveCartError = (cart: IBaseCart | ICart) => ({
	type: types.CART_SAVE_ERROR,
	payload: cart,
});

export const removeItem = (id: string) => ({
	type: types.CART_REMOVE_ITEM,
	payload: id,
});

export const startCancelCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (id: string) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = `cart/${id}/cancel`;
		try {
			const res = await fetchWithToken(url, {}, 'DELETE');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(cancelCart(data.history));
			toast.success('Your cart has been cancelled');
		} catch (err) {
			toast.error(err.message);
			dispatch(setCartLoading(false));
		}
	};
};

const cancelCart = (historyEntry: any) => ({
	type: types.CART_CANCEL,
	payload: historyEntry,
});

export const startCompleteCart: ActionCreator<
	ThunkAction<Promise<Action | void>, CartState, void, AnyAction>
> = (id: string) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setCartLoading());
		const url = `cart/${id}/complete`;
		try {
			const res = await fetchWithToken(url, {}, 'DELETE');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(completeCart(data.history));
			toast.success(
				'Congratulations, you have completed your shopping cart!'
			);
		} catch (err) {
			toast.error(err.message);
			dispatch(setCartLoading(false));
		}
	};
};

const completeCart = (historyEntry: any) => ({
	type: types.CART_COMPLETE,
	payload: historyEntry,
});
