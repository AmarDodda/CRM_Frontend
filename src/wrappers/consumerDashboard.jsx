import React, { useState } from 'react';
import { Link, Outlet, useLoaderData, redirect } from 'react-router-dom';
import consumerServices from '../services/consumerServices';
import { useToast } from '../contexts/ToastContext';

export async function consumerLoader() {
  try {
    const consumer = await consumerServices.getConsumer();
    return { consumer };
  } catch (error) {
    return redirect('/consumerlogin');
  }
}

const ConsumerDashboardWrapper = () => {
  const { addToast } = useToast();
  const { consumer } = useLoaderData();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    consumerServices.logout()
      .then(response => {
        addToast('Logout Successful', 'success');
        setTimeout(() => {
          window.location.href = '/consumerlogin';
        }, 2000);
      })
      .catch(error => {
        addToast(`Logout Failed: ${error.response?.data?.message || error.message}`, 'danger');
      });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Toggle button for offcanvas */}
          <button
            className="btn btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            onClick={toggleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>
          {/* Navbar brand (centered) */}
          <Link className="navbar-brand d-flex mx-auto fs-3 text-uppercase" to="/">
            CRM USER SPACE
          </Link>
          {/* Welcome message and logout */}
          <div className="text-light">
            <span className="me-3">Welcome {consumer?.consumer.name}</span>
            <Link className="btn btn-outline-light" to="#" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas sidebar */}
      <div className={`offcanvas offcanvas-start ${sidebarOpen ? 'show' : ''}`} tabIndex="-1" id="sidebarMenu">
        <div className="offcanvas-header bg-dark">
          <h5 className="offcanvas-title text-light">Menu</h5>
          <button type="button" className="btn-close btn-close-white" onClick={toggleSidebar}></button>
        </div>
        <div className="offcanvas-body">
          {/* Menu items */}
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/consumerdashboard" onClick={() => setSidebarOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consumerdashboard/feedback" onClick={() => setSidebarOpen(false)}>
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consumerdashboard/query" onClick={() => setSidebarOpen(false)}>
                Query
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <Outlet context={{ consumer }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboardWrapper;



