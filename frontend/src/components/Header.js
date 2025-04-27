import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-pink text-white p-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-white text-decoration-none">
            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Student Management System</h1>
          </Link>
          <nav>
            <Link to="/" className="btn btn-outline-light me-2" style={{ borderColor: '#ff69b4' }}>Home</Link>
            <Link to="/students" className="btn btn-outline-light me-2" style={{ borderColor: '#ff69b4' }}>Students</Link>
            <Link to="/add-student" className="btn btn-light" style={{ backgroundColor: '#ff69b4', color: 'white' }}>Add Student</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
