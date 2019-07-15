import React from 'react';
import logo from '../images/fitatu.svg';
import "../styles/Header.css";

const Header = () => {
  return (

    <div className="header">
      <a href="/"> <img src={logo} alt="logo" /></a>
    </div>)
}

export default Header;