import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import StatisticsPage from '../pages/StatisticsPage';

function AppRouter() {
	return (
		<Router basename="shopping-list">
			<div className="app">
				<Switch>
					<Route path="/" exact={true}>
						<HomePage />
					</Route>
					<Route path="/history" exact={true}>
						<HistoryPage />
					</Route>
					<Route path="/statistics" exact={true}>
						<StatisticsPage />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
