// // HomeWrapper.jsx
// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const HomeWrapper = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             CRM
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <Link className="nav-link active" aria-current="page" to="/register">
//                 Register
//               </Link>
//               <Link className="nav-link" to="/login">
//                 Login
//               </Link>
//               <Link className="nav-link" to="/consumerregister">
//                 Customer Register
//               </Link>
//               <Link className="nav-link" to="/consumerlogin">
//                 Customer Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default HomeWrapper;


// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// const HomeWrapper = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             CRM
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="offcanvas offcanvas-start"
//             tabIndex="-1"
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//                 CRM
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     Register
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/consumerregister">
//                     Customer Register
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/consumerlogin">
//                     Customer Login
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="container mt-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default HomeWrapper;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomeWrapper = () => {
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
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-list"></i>
          </button>
          {/* Navbar brand */}
          <Link className="navbar-brand mx-auto fs-3 text-uppercase" to="/">
            C R M 
          </Link>
        </div>
      </nav>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Accordion for menu items */}
          <div className="accordion" id="accordionExample">
            {/* User section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingUser">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseUser"
                  aria-expanded="true"
                  aria-controls="collapseUser"
                >
                  User
                </button>
              </h2>
              <div
                id="collapseUser"
                className="accordion-collapse collapse show"
                aria-labelledby="headingUser"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consumer section */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingConsumer">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseConsumer"
                  aria-expanded="false"
                  aria-controls="collapseConsumer"
                >
                  Consumer
                </button>
              </h2>
              <div
                id="collapseConsumer"
                className="accordion-collapse collapse"
                aria-labelledby="headingConsumer"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/consumerregister">
                        Customer Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/consumerlogin">
                        Customer Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeWrapper;


