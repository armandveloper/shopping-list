import { RouteProps } from 'react-router-dom';

export type CustomRouteProps = {
	isAuthenticated: boolean;
} & RouteProps;
