import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Home</h3>
            </div>
            <div className="card-body">
              <p>Welcome to the CRM Application</p>
              <p>
                This is a Customer Relationship Management (CRM) Application built with React and NodeJS. It allows the users to do the following:
              </p>
              <ul>
                <li>Register</li>
                <li>Login</li>
                <li>Manage Customer Profiles</li>
                <li>Track Customer Purchase History</li>
                <li>Record Customer Preferences</li>
                <li>Generate Reports and Analytics</li>
              </ul>

              <p>
                The application is built with the following technology stack:
              </p>

              <ul>
                <li>React</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
