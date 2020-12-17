import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
    return <Route {...props} render={() => {
        if (localStorage.getItem('token') && localStorage.getItem('redirect')) {
            localStorage.removeItem('redirect');
            return <Component />
        } else if (localStorage.getItem('token')) {
            return <Component />
        }
        return (localStorage.setItem('redirect', "Login To See Your Plants!"),<Redirect to="/login" />)
    }} />
};

export default PrivateRoute;