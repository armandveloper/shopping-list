import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { RootState } from '../redux/store';
import { startChecking } from '../redux/actions/auth';
import LoadingScreen from '../components/ui/LoadingScreen';

const HomePage = lazy(() => import('../pages/HomePage'));
const HistoryPage = lazy(() => import('../pages/HistoryPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));

function AppRouter() {
	const dispatch = useDispatch();

	const { checking, uid } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	if (checking) {
		return <LoadingScreen />;
	}

	return (
		<Router basename="shopping-list">
			<Suspense fallback={<LoadingScreen />}>
				<Switch>
					{!uid ? (
						<>
							<Route path="/account/signin" exact={true}>
								<SigninPage />
							</Route>
							<Route path="/account/signup" exact={true}>
								<SignupPage />
							</Route>
							<Redirect to="/account/signin" />
						</>
					) : (
						<>
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
						</>
					)}
				</Switch>
			</Suspense>
		</Router>
	);
}

export default AppRouter;
