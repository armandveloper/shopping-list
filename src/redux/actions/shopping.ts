import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { ShoppingState } from '../store';
import types from '../types';
import {
	IBaseCategory,
	IBaseItem,
	ICategoriesResponse,
	ICategory,
	ICreateCategoryResponse,
	IModifyItemResponse,
	IItem,
	IItemsPayload,
	IItemsResponse,
} from '../../interfaces/shopping.interface';
import { fetchWithToken } from '../../helpers/fetch';
import { setIsLoading, unsetIsLoading } from './ui';

const setCategoriesLoading = (isLoading: boolean = true) => ({
	type: types.SHOPPING_SET_CATEGORIES_LOADING,
	payload: isLoading,
});

export const getCategories: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = () => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		try {
			const res = await fetchWithToken('categories');
			const data: ICategoriesResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(saveCategories(data.categories));
		} catch (err) {
			dispatch(setCategoriesLoading(false));
			toast.error(err.message);
		}
	};
};

const saveCategories = (categories: ICategory[]) => ({
	type: types.SHOPPING_SAVE_CATEGORIES,
	payload: categories,
});

export const createCategory: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (category: IBaseCategory, cb: () => void) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		try {
			const res = await fetchWithToken('categories', category, 'POST');
			const data: ICreateCategoryResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			cb();
			dispatch(addCategory(data.category));
		} catch (err) {
			cb();
			toast.error(err.message);
		}
	};
};

const addCategory = (category: ICategory) => ({
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
			const data: IItemsResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			const { categories, items } = data;
			dispatch(unsetIsLoading());
			dispatch(saveItems({ categories, items }));
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const saveItems = (itemsPayload: IItemsPayload) => ({
	type: types.SHOPPING_SAVE_ITEMS,
	payload: itemsPayload,
});

export const createItem: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (item: IBaseItem, cb: () => void) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithToken('items', item, 'POST');
			const data: IModifyItemResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(addItem(data.item));
			cb();
			toast.success('Item created');
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
			console.log(err);
		}
	};
};

const addItem = (item: IItem) => ({
	type: types.SHOPPING_ADD_ITEM,
	payload: item,
});

export const showItem = (item: IItem) => ({
	type: types.SHOPPING_SHOW_ITEM,
	payload: item,
});

export const hideItem = () => ({
	type: types.SHOPPING_HIDE_ITEM,
});

export const startUpdateItem: ActionCreator<
	ThunkAction<Promise<Action | void>, ShoppingState, void, AnyAction>
> = (item: IItem, cb: () => void) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		const { __v, ...itemData } = item;
		try {
			const res = await fetchWithToken(
				`items/${item._id}`,
				itemData,
				'PUT'
			);
			const data: IModifyItemResponse = await res.json();
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

const updateItem = (item: IItem) => ({
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
			const data: IModifyItemResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			dispatch(unsetIsLoading());
			dispatch(deleteItem(data.item));
			toast.success('Item deleted');
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const deleteItem = (item: IItem) => ({
	type: types.SHOPPING_DELETE_ITEM,
	payload: item,
});
