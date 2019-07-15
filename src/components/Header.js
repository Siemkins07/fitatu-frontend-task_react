import React from 'react';
import logo from '../images/fitatu.svg';
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to='/'> <img src={logo} alt="logo" /></Link>
    </div>);
}

export default Header;