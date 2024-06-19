import React from "react";

const AdminHome = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h3 className="text-center mb-0">Welcome to CRM Admin Dashboard</h3>
            </div>
            <div className="card-body">
              <p className="lead text-muted">
                This Customer Relationship Management (CRM) Application offers the following functionalities for administrators:
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Manage Consumer Information: Add, Update and Delete consumer details.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Dashboard Overview: View comprehensive consumer profiles including purchase history.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  History of Communications: Access the communications logs.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Feedback Management: Review and respond to consumer feedback.
                </li>
                <li className="list-group-item">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Query Handling: Address consumer queries and issues effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
