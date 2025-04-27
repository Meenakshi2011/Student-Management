import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3" style={{ backgroundColor: '#4caf50' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1 style={{ color: 'white' }}>Student Management System</h1>
          </Link>
          <nav>
            <Link to="/" className="btn btn-green me-2">Home</Link>
            <Link to="/students" className="btn btn-green me-2">Students</Link>
            <Link to="/add-student" className="btn btn-green">Add Student</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;


