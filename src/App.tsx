import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRouter from './routers/AppRouter';
import GlobalStyles from './styles/globalStyles';

function App() {
	return (
		<>
			<Provider store={store}>
				<GlobalStyles />
				<AppRouter />
			</Provider>
		</>
	);
}

export default App;
