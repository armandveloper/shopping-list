import { Action } from 'redux';
import types from '../types';

const initialState = {
	showAddItem: false,
	showSidebarRight: false,
};

const uiReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case types.UI_SHOW_ADD_ITEM:
			return {
				...state,
				showAddItem: true,
			};
		case types.UI_HIDE_ADD_ITEM:
			return {
				...state,
				showAddItem: false,
			};
		case types.UI_SHOW_SIDEBAR_RIGHT:
			return {
				...state,
				showSidebarRight: true,
			};
		case types.UI_HIDE_SIDEBAR_RIGHT:
			return {
				...state,
				showSidebarRight: false,
			};
		case types.UI_TOGGLE_SIDEBAR_RIGHT:
			return {
				...state,
				showSidebarRight: !state.showSidebarRight,
			};
		default:
			return state;
	}
};

export default uiReducer;
