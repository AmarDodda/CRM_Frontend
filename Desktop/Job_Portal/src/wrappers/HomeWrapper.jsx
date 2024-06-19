// HomeWrapper.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomeWrapper = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CRM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/register">
                Register
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/consumerregister">
                Customer Register
              </Link>
              <Link className="nav-link" to="/consumerlogin">
                Customer Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomeWrapper;
