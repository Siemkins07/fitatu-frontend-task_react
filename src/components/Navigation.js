import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {

  const navigationList = [
    { name: "home", path: "/", exact: true },
    { name: "about us", path: "/about_us" },
    { name: "employees", path: "/employees" },
    { name: "contact", path: "/contact" },
    { name: "faq", path: "/faq" },
    { name: "admin", path: "/admin" },
  ];

  const menu = navigationList.map(item => (
    <li key={item.name} >
      <NavLink to={item.path} exact={item.exact ? item.exact : false} > {item.name} </NavLink>
    </li>
  ))

  return (
    <nav className='navigation' >
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;