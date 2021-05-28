import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { ShoppingState } from '../store';
import types from '../types';
import { fetchWithToken } from '../../helpers/fetch';
import { setIsLoading, unsetIsLoading } from './ui';

export const getCategories: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = () => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken('categories');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(saveCategories(data.categories));
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const saveCategories = (categories: any[]) => ({
	type: types.SHOPPING_SAVE_CATEGORIES,
	payload: categories,
});

export const createCategory: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (
	category: { category: string; lowercase: string; user: string },
	cb: () => void
) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		try {
			const res = await fetchWithToken('categories', category, 'POST');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			cb();
			dispatch(addCategory(data.category));
		} catch (err) {
			cb();
			toast.error(err.message);
		}
	};
};

const addCategory = (category: any) => ({
	type: types.SHOPPING_ADD_CATEGORY,
	payload: category,
});

export const getItems: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = () => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken('items');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			if (data.items.length > 0) {
				dispatch(saveItems(data.items));
			}
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const saveItems = (items: any[]) => ({
	type: types.SHOPPING_SAVE_ITEMS,
	payload: items,
});

export const createItem: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (
	item: {
		name: string;
		note?: string;
		image?: string;
		category: string;
		user: string;
	},
	cb: () => void
) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken('items', item, 'POST');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(addItem(data.item));
			cb();
			toast.success('Item created');
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const addItem = (item: any) => ({
	type: types.SHOPPING_ADD_ITEM,
	payload: item,
});

export const showItem = (item: any) => ({
	type: types.SHOPPING_SHOW_ITEM,
	payload: item,
});

export const hideItem = () => ({
	type: types.SHOPPING_HIDE_ITEM,
});

export const startUpdateItem: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (
	item: {
		_id: string;
		name: string;
		note?: string;
		image?: string;
		category: string;
		user: string;
	},
	cb: () => void
) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken(`items/${item._id}`, item, 'PUT');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(updateItem(data.item));
			cb();
			toast.success('Item updated');
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const updateItem = (item: any) => ({
	type: types.SHOPPING_UPDATE_ITEM,
	payload: item,
});

export const startDeleteItem: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (id: string) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken(`items/${id}`, {}, 'DELETE');
			const data = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(deleteItem(id));
			toast.success('Item deleted');
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const deleteItem = (id: string) => ({
	type: types.SHOPPING_DELETE_ITEM,
	payload: id,
});
