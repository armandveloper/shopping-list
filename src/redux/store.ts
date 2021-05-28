import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

export interface UiState {
	showAddItem: boolean;
	showSidebarRight: boolean;
	showItemInfo: boolean;
	isDialogOpen: boolean;
	isLoading: boolean;
}

export interface AuthState {
	checking: boolean;
	uid?: string;
}

export interface ShoppingState {
	items: any[];
	categories: any[];
	currentItem: any | null;
}

export interface CartState {
	name: string;
	user: string;
	isEditing: boolean;
	items: any[];
}

export interface RootState {
	ui: UiState;
	auth: AuthState;
	shopping: ShoppingState;
	cart: CartState;
}

const composeEnhancers =
	(window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancers);
