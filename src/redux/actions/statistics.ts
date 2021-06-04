import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import types from '../types';
import { RootState } from '../store';
import {
	IStatisticsItem,
	IStatisticsResponse,
} from '../../interfaces/statistics.interface';
import { fetchWithToken } from '../../helpers/fetch';

const setLoading = (isLoading: boolean = true) => ({
	type: types.STATISTICS_SET_LOADING,
	payload: isLoading,
});

export const startGetStatistics: ActionCreator<
	ThunkAction<Promise<Action | void>, RootState, void, AnyAction>
> = () => {
	return async (
		dispatch: Dispatch<Action>,
		getState
	): Promise<Action | void> => {
		const { uid: user } = getState().auth;
		const url = `users/${user}/statistics`;
		try {
			const res = await fetchWithToken(url);
			const data: IStatisticsResponse = await res.json();
			const { success, msg, ...payload } = data;
			if (!success) {
				throw new Error(msg);
			}
			dispatch(getStatistics(payload));
		} catch (err) {
			toast.error(err.message);
			dispatch(setLoading(false));
		}
	};
};

const getStatistics = (statistics: {
	total: IStatisticsItem[];
	topItems: IStatisticsItem[];
	topCategories: IStatisticsItem[];
	monthlySummary: IStatisticsItem[];
}) => ({
	type: types.STATISTICS_GET,
	payload: statistics,
});
