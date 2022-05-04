import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const cart = event => {
    event.preventDefault();
    Auth.cart();
  };

  return (
    <header className="bg-secondary py-1 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className='header-title'>BRYSS</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a className="logoutBtn" href="/" onClick={logout}>
                Logout
              </a>
              <a className="cartBtn" href="/" onClick={cart}>
                Cart
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/cart">Cart</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
