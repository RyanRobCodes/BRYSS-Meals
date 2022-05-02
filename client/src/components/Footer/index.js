import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-100 mt-auto bg-secondary p-4">
      <div className="footer-container">
        &copy;{new Date().getFullYear()} by BRYSS
      </div>
    </footer>
  );
};

export default Footer;
