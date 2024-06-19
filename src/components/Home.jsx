// import React from "react";

// const Home = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-header">
//               <h3>Home</h3>
//             </div>
//             <div className="card-body">
//               <p>Welcome to the CRM Application</p>
//               <p>
//                 This is a Customer Relationship Management (CRM) Application built with React and NodeJS. It allows the users to do the following:
//               </p>
//               <ul>
//                 <li>Register</li>
//                 <li>Login</li>
//                 <li>Manage Customer Profiles</li>
//                 <li>Track Customer Purchase History</li>
//                 <li>Record Customer Preferences</li>
//                 <li>Generate Reports and Analytics</li>
//               </ul>

//               <p>
//                 The application is built with the following technology stack:
//               </p>

//               <ul>
//                 <li>React</li>
//                 <li>NodeJS</li>
//                 <li>Express</li>
//                 <li>MongoDB</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card shadow-lg border-0">
            <div className="card-header text-center text-white bg-dark">
              <h3>Welcome to CRM Application</h3>
            </div>
            <div className="card-body bg-light">
              <p className="lead text-secondary">
                This is a Customer Relationship Management (CRM) Application built with React and NodeJS. It allows users to:
              </p>
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Register
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Login
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Manage Customer Profiles
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Track Customer Purchase History
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Record Customer Preferences
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Generate Reports and Analytics
                </li>
              </ul>

              <p className="lead text-secondary">
                The application is built with the following technology stack:
              </p>

              <ul className="list-group">
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>React
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>NodeJS
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>Express
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
