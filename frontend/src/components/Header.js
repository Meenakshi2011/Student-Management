import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>
          <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>CBIT Student Management System</h1>
        </Link>
        <nav>
          <Link to="/" style={{ color: '#ecf0f1', padding: '8px 16px', marginRight: '10px', border: '1px solid #ecf0f1', borderRadius: '5px', fontWeight: '500', fontSize: '1rem', textDecoration: 'none' }}>Home</Link>
          <Link to="/students" style={{ color: '#ecf0f1', padding: '8px 16px', marginRight: '10px', border: '1px solid #ecf0f1', borderRadius: '5px', fontWeight: '500', fontSize: '1rem', textDecoration: 'none' }}>Students</Link>
          <Link to="/add-student" style={{ backgroundColor: '#3498db', color: '#fff', padding: '8px 16px', borderRadius: '5px', fontWeight: '500', fontSize: '1rem', textDecoration: 'none' }}>Add Student</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
