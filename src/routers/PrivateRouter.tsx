import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoadingScreen from '../components/ui/LoadingScreen';
const HomePage = lazy(() => import('../pages/HomePage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));

const PrivateRouter = () => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Switch>
				<Route exact={true} path="/history" component={HistoryPage} />
				<Route
					exact={true}
					path="/statistics"
					component={StatisticsPage}
				/>
				<Route exact={true} path="/" component={HomePage} />
				<Redirect to="/" />
			</Switch>
		</Suspense>
	);
};

export default PrivateRouter;
