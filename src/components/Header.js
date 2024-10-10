import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/employee-list">Employee List</Link>
      </nav>
    </header>
  );
}

export default Header;
