import React from 'react';
import { Route, RouteProps} from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'


interface Props extends RouteProps{
    isAuth: boolean;
}

const ProtectedRoute = () => {
    const auth = Cookies.get('jwt_token')
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;

}

export default ProtectedRoute;