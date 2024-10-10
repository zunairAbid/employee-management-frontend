import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Add this for navbar styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Employee Management</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/employee-list">Employee List</Link></li>
        <li><Link to="/add">Add Employee</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
