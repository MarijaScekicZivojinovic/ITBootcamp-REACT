import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const isAuth = false;
    return (
        isAuth ? children : <Navigate to='/login' />
    );
}

export default PrivateRoute;