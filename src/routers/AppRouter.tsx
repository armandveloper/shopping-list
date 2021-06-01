import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { RootState } from '../redux/store';
import { startChecking } from '../redux/actions/auth';
import LoadingScreen from '../components/ui/LoadingScreen';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

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
			<Switch>
				<PublicRoutes
					path="/account"
					component={PublicRouter}
					isAuthenticated={uid !== null}
				/>
				<PrivateRoutes
					path="/"
					component={PrivateRouter}
					isAuthenticated={uid !== null}
				/>

				<Redirect to="/account/signin" />
			</Switch>
		</Router>
	);
}

export default AppRouter;
