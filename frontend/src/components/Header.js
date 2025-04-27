import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <h1 style={{ color: '#ff4081' }}>CBIT Student Management System</h1> {/* Pink color for title */}
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

