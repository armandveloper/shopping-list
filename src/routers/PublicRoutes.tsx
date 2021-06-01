import { Route, Redirect } from 'react-router-dom';
import { CustomRouteProps } from '../interfaces/routes.interface';

function PublicRoutes(props: CustomRouteProps) {
	const { isAuthenticated, ...rest } = props;

	if (isAuthenticated) return <Redirect to="/" />;

	return <Route {...rest} />;
}

export default PublicRoutes;
