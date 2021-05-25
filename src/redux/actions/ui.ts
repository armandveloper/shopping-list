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

export const toggleSidebarRight = () => ({
	type: types.UI_TOGGLE_SIDEBAR_RIGHT,
});

export const showItemInfo = () => ({
	type: types.UI_SHOW_ITEM_INFO,
});

export const hideItemInfo = () => ({
	type: types.UI_HIDE_ITEM_INFO,
});

export const openDialog = () => ({
	type: types.UI_OPEN_DIALOG,
});

export const closeDialog = () => ({
	type: types.UI_CLOSE_DIALOG,
});

export const setIsLoading = () => ({
	type: types.UI_IS_LOADING,
});

export const unsetIsLoading = () => ({
	type: types.UI_IS_NOT_LOADING,
});
