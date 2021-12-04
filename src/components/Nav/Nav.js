import React from 'react';
import './Nav.scss';

function Logo() {
  return (
    <div className="logo">
      <h1>WeBucks</h1>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="nav-menu">
      <ul>
        <li>COFFEE</li>
        <li>MENU</li>
        <li>STORE</li>
        <li>WHAT'S NEW</li>
      </ul>
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <Logo />
      <NavMenu />
    </div>
  );
}

export default Nav;
