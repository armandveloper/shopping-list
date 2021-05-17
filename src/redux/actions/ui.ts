import types from '../types';

export const showAddItem = () => ({
	type: types.UI_SHOW_ADD_ITEM,
});

export const hideAddItem = () => ({
	type: types.UI_HIDE_ADD_ITEM,
});

export const showSidebarRight = () => ({
	type: types.UI_SHOW_SIDEBAR_RIGHT,
});

export const hideSidebarRight = () => ({
	type: types.UI_HIDE_SIDEBAR_RIGHT,
});
