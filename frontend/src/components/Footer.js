import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink text-white p-4 mt-5">
      <div className="container text-center">
        <p style={{ fontFamily: 'Arial, sans-serif' }}>Student Management System &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;

