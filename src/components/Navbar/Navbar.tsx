import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Cookies from 'js-cookie'
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

 const removeJwtToken = (event: React.MouseEvent<HTMLButtonElement>) => {
  const history = createBrowserHistory(); 
    Cookies.remove('jwt_token')
    history.replace('/login')
    history.go(0)
  }

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to='/home'><span>Home</span></Link>

        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <button type='button' onClick={removeJwtToken}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;