import { AnyAction } from 'redux';
import types from '../types';

const initialState = {
	isLoading: true,
	total: null,
	topItems: null,
	topCategories: null,
	monthlySummary: null,
};

const statisticsReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case types.STATISTICS_GET:
			return { ...state, ...action.payload, isLoading: false };
		default:
			return state;
	}
};

export default statisticsReducer;
