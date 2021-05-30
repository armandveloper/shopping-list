import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import { AuthState } from '../store';
import { IAuthResponse } from '../../interfaces/auth.interface';
import { IUser } from '../../interfaces/user.interface';
import types from '../types';
import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';
import { setIsLoading, unsetIsLoading } from './ui';

export const startSignup: ActionCreator<
	ThunkAction<Promise<Action | void>, AuthState, void, AnyAction>
> = (user: IUser) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithoutToken('auth/signup', user, 'POST');
			const data: IAuthResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			localStorage.setItem('shopping-list:token', data.token);
			dispatch(unsetIsLoading());
			return dispatch(signup(data.user.uid));
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const signup = (uid: string) => ({
	type: types.AUTH_SIGNUP,
	payload: uid,
});

export const startSignin: ActionCreator<
	ThunkAction<Promise<Action | void>, AuthState, void, AnyAction>
> = (user: IUser) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		dispatch(setIsLoading());
		try {
			const res = await fetchWithoutToken('auth/signin', user, 'POST');
			const data: IAuthResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			localStorage.setItem('shopping-list:token', data.token);
			dispatch(unsetIsLoading());
			return dispatch(signin(data.user.uid));
		} catch (err) {
			dispatch(unsetIsLoading());
			toast.error(err.message);
		}
	};
};

const signin = (uid: string) => ({
	type: types.AUTH_SIGNUP,
	payload: uid,
});

export const startChecking: ActionCreator<
	ThunkAction<Promise<Action | void>, AuthState, void, AnyAction>
> = (user: IUser) => {
	return async (dispatch: Dispatch<Action>): Promise<Action | void> => {
		try {
			const res = await fetchWithToken('auth/renewToken');
			if (!res.ok) throw new Error(res.statusText);
			const data: IAuthResponse = await res.json();
			if (!data.success) throw new Error(data.msg);
			localStorage.setItem('shopping-list:token', data.token);
			dispatch(signin(data.user.uid));
		} catch (err) {
			dispatch(finishChecking());
		}
	};
};

const finishChecking = () => ({
	type: types.AUTH_CHECKING_FINISH,
});
