import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

export interface RootState {
	ui: {
		showAddItem: boolean;
		showSidebarRight: boolean;
		showItemInfo: boolean;
	};
}

const composeEnhancers =
	(window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const enhancers = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancers);
