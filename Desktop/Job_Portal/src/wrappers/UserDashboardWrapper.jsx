
import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import userServices from '../services/userServices';
import { useToast } from '../contexts/ToastContext';

export async function userLoader() {
  const user = await userServices.getUser();
  if (!user) {
    return { redirect: '/login' };
  }
  return { user };
}

const UserDashboardWrapper = () => {
  const { addToast } = useToast();
  const { user } = useLoaderData(); // Destructure user from loader data

  console.log(user); // Log user data to check its structure

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    userServices.logout()
      .then(response => {
        addToast('Logout Successful', 'success');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      })
      .catch(error => {
        addToast(`Logout Failed: ${error.response?.data?.message || error.message}`, 'danger');
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleSidebar} // Toggle sidebar visibility on button click
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span className="nav-link disabled">
                    Welcome {user.user.name}{/* Use user.name if user is defined */}
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-3 ${sidebarOpen ? 'show' : 'hide'}`}> {/* Adjust column size for medium screens */}
          <div className="sidebar bg-light">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/info">Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/communications">History of Communications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/queries">Queries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/analytics">Analytics</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9"> {/* Adjust column size for medium screens */}
          <Outlet /> {/* Renders child routes */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardWrapper;

