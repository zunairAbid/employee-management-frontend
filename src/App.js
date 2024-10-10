import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Employee Management System</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employee List</Link>
              </li>
              <li>
                <Link to="/add-employee">Add Employee</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<EmployeeForm />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© 2024 Employee Management System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
