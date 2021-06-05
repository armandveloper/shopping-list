import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
	ICategory,
	IItem,
	IItemByCategory,
} from '../interfaces/shopping.interface';
import { ICart, IHistory } from '../interfaces/cart.interface';
import { IStatisticsItem } from '../interfaces/statistics.interface';
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
	searchTerm: string;
	isLoading: boolean;
	isLoadingCategories: boolean;
}

export interface StatisticsState {
	isLoading: boolean;
	total: IStatisticsItem[];
	topItems: IStatisticsItem[];
	topCategories: IStatisticsItem[];
	monthlySummary: IStatisticsItem[];
}

export interface CartState {
	isEditMode: boolean;
	isLoading: boolean;
	cart: ICart;
	unsavedCart: ICart;
	history: {
		total: number;
		history: IHistory[];
		isLoading: boolean;
	};
}

export interface RootState {
	ui: UiState;
	auth: AuthState;
	shopping: ShoppingState;
	cart: CartState;
	statistics: StatisticsState;
}

const composeEnhancers =
	(window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancers);
