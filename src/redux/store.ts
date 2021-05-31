import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
	ICategory,
	IItem,
	IItemByCategory,
} from '../interfaces/shopping.interface';
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
	items: IItemByCategory[];
	categories: ICategory[];
	currentItem: IItem | null;
}

interface ICart {
	_id: string;
	name: string;
	user: string;
	items: any[];
}

export interface CartState {
	isEditMode: boolean;
	isLoading: boolean;
	cart: ICart;
	unsavedCart: ICart;
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
