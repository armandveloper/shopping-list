import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoadingScreen from '../components/ui/LoadingScreen';
const SigninPage = lazy(() => import('../pages/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));

const PublicRouter = () => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Switch>
				<Route path="/account/signin" component={SigninPage} />
				<Route path="/account/signup" component={SignupPage} />
				<Redirect to="/account/signin" />
			</Switch>
		</Suspense>
	);
};

export default PublicRouter;
