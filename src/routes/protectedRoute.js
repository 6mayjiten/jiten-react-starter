import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			isLoggedIn
				? <Component {...props} />
				: <Redirect to={{pathname: '/', state: {from: props.location}}}/>
		)}
	/>
);

export default PrivateRoute;

