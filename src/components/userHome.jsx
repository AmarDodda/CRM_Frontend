import React from "react";

const UserHome = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h2 className="mb-0 text-center">About Our CRM Application</h2>
            <p className="lead text-center">Empowering Your Experience</p>
          </div>
          <div className="mx-3 mx-md-auto text-start">
            <div className="mb-4">
              <h3>Welcome to our Customer Relationship Management (CRM) Application!</h3>
              <p className="lead">
                At CRM Solutions, we are committed to providing you with powerful tools and features to streamline your customer interactions and grow your business.
              </p>
              <p>
                Our CRM application is designed with your needs in mind, ensuring intuitive navigation and comprehensive features that empower you to manage customer relationships effectively.
              </p>
            </div>
            <div className="mb-4">
              <h3>Why Your Feedback Matters</h3>
              <p>
                Your feedback is crucial to our continuous improvement efforts. By understanding what features you find most valuable and areas where we can enhance, we can tailor our solutions to better serve you.
              </p>
              <p>
                For example, your insights on usability, feature requests, and overall experience help us prioritize development efforts and ensure our CRM remains cutting-edge and user-friendly.
              </p>
            </div>
            <div className="mb-4">
              <h3>The Importance of Raising Queries</h3>
              <p>
                Queries are opportunities for us to address any questions or concerns you may have promptly. Whether it's troubleshooting issues, seeking assistance, or understanding new features, your queries enable us to provide personalized support that meets your specific needs.
              </p>
              <p>
                By raising queries, you help us improve our customer support and ensure a smooth experience for all users of our CRM application.
              </p>
            </div>
            <div>
              <p className="lead text-muted">
                Explore our CRM dashboard to discover how we can help you build stronger customer relationships and achieve your business goals. Your engagement through feedback and queries drives our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
