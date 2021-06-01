import { Route, Redirect } from 'react-router-dom';
import { CustomRouteProps } from '../interfaces/routes.interface';

function PrivateRoutes(props: CustomRouteProps) {
	const { isAuthenticated, ...rest } = props;

	if (!isAuthenticated) return <Redirect to="/account/signin" />;

	return <Route {...rest} />;
}

export default PrivateRoutes;
