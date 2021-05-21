import { Action } from 'redux';
import types from '../types';

const initialState = {
	showAddItem: false,
	showSidebarRight: false,
	showItemInfo: false,
	isDialogOpen: false,
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
		case types.UI_SHOW_ITEM_INFO:
			return {
				...state,
				showItemInfo: true,
			};
		case types.UI_HIDE_ITEM_INFO:
			return {
				...state,
				showItemInfo: false,
			};
		case types.UI_OPEN_DIALOG:
			return {
				...state,
				isDialogOpen: true,
			};
		case types.UI_CLOSE_DIALOG:
			return {
				...state,
				isDialogOpen: false,
			};
		default:
			return state;
	}
};

export default uiReducer;
