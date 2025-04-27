import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Student Management System &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
