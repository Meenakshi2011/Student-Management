import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white text-pink p-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-pink text-decoration-none">
            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
              CBIT Student Management System
            </h1>
          </Link>
          <nav>
            <Link to="/" className="btn btn-pink text-white me-2">Home</Link>
            <Link to="/students" className="btn btn-pink text-white me-2">Students</Link>
            <Link to="/add-student" className="btn btn-pink text-white">Add Student</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

}

export default Header;
