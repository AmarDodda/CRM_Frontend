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
  console.log(consumer)

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
                    Welcome {consumer.consumer.name} {/* Use consumer.name if consumer is defined */}
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
                <Link className="nav-link" to="/consumerdashboard/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/consumerdashboard/query">Query</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-md-9"> {/* Adjust column size for medium screens */}
          <Outlet context={{ consumer }} /> {/* Pass consumer data to child routes */}
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboardWrapper;


