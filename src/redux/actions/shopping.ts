import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ShoppingState } from '../store';
// import { IUser } from '../../interfaces/user.interface';
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
			return dispatch(saveCategories(data.categories));
		} catch (err) {
			dispatch(unsetIsLoading());
			alert(err.message);
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
			return dispatch(addCategory(data.category));
		} catch (err) {
			cb();
			alert(err.message);
		}
	};
};

const addCategory = (category: any) => ({
	type: types.SHOPPING_ADD_CATEGORY,
	payload: category,
});
