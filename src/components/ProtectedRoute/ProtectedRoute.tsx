import React, { useState,Fragment, useEffect } from 'react';
import { Route, RouteProps} from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from "react-router";
import Cookies from 'js-cookie'
import Home from '../Home/Home';
import Login from '../Login/Login'
import { useNavigate } from "react-router-dom";

interface Props extends RouteProps{
    isAuth: boolean;
}

const ProtectedRoute = ({isAuth, ...routeProps}: Props): any => {
    // const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(isAuth,"protected")
    if(isAuth){
        return <Navigate to="/" replace state={{ from: location }} />;

    }  
     return <Navigate to="/login" replace state={{ from: location }} />;


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page

}

export default ProtectedRoute;