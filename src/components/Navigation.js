import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navigation.css';

class Navigation extends React.Component {

  componentDidMount() {
    let mainNav = document.querySelector('.main-nav');
    let navBarToggle = document.querySelector('.navbar-toggle');
    let main = document.querySelector('main')

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      main.classList.toggle('marginTop');
    });
  }

  render() {

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
        <NavLink to={item.path} className="nav-links" exact={item.exact ? item.exact : false} > {item.name} </NavLink>
      </li>
    ))

    return (
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <Link to="/" className="logo">logo</Link>
        <ul className="main-nav" id="js-menu">
          {menu}
        </ul>
      </nav>
    );
  }
}
export default Navigation;

