# CRM Frontend

## Overview

The CRM frontend is a React application that provides different interfaces for users(administrators) and consumers. The app uses React Router for navigation and routing between various components and pages. It includes features such as registration, login, user space(info, dashboard, history of communications, feedbackList and queriesList), consumers space(about us, feedback forms, and query forms).

## Structure

### App.jsx
This is the main entry point of the application. It sets up the routing structure using React Router's `createBrowserRouter` and `RouterProvider`.

- **Routes:**
  - `/`: Home page with options to register and login.
  - `/dashboard`: Admin dashboard with various sub-routes for viewing customer info, customer dashboard, feedback, queries, communications.
  - `/consumerdashboard`: Consumer dashboard with options for feedback and query forms.

### HomeWrapper
This component serves as a wrapper for the home routes. It includes a navigation bar with links to the registration and login pages for both users and consumers.

### UserDashboardWrapper
This component wraps the admin dashboard routes. It manages user authentication and displays a sidebar with links to different sections of the admin dashboard, which are: Info, Dashboard, History of Communications. FeedbackList and Queries List.

Here's a brief overview of each section in the admin dashboard:

1. **Customer Information Form (Info)**:
   - This form allows admins to input and submit customer details, including customer ID, name, email, purchase history, and preferences (fabric types, colors, and designs).
   - Utilizes `Formik` for form handling and validation with `Yup`.
   - Upon submission, the form sends a POST request to the server to add a new customer.

2. **Customer Dashboard (Dashboard)**:
   - Displays a list of customers with their details, including ID, name, email, purchase history, and preferences.
   - Allows admins to update, delete, and send emails to customers.
   - Editing a customer enables an update form pre-filled with the customer’s details.
   - Fetches and updates customer data from the server using `axios`.

3. **Feedback List**:
   - Displays a list of feedback entries from customers, including consumer ID, name, product, rating, comment, and date.
   - Fetches feedback data from the server using `axios`.
   - Provides a detailed view in a table format for easy management and review by admins.

4. **Queries List**:
   - Shows a list of customer queries with details such as consumer ID, name, subject, message, and date.
   - Fetches query data from the server using `axios`.
   - Allows admins to view and manage customer queries efficiently.

5. **History of Communication**:
   - Lists all communications with customers, detailing customer ID, type of communication, subject, content, date, and email content.
   - Fetches communication history from the server using `axios`.
   - Provides a comprehensive view of all interactions with customers, aiding in better customer service management.

Each section helps in managing different aspects of customer interactions and feedback, providing a holistic admin dashboard experience.

### ConsumerDashboardWrapper
Similar to `UserDashboardWrapper`, this component wraps the consumer dashboard routes. It manages consumer authentication and provides navigation for consumers to access feedback and query forms. It also gives the overview of our CRM Application to the consumers.

Here's a brief overview of each section in the consumer dashboard:

# About Us

The "About Us" page provides an overview of our Customer Relationship Management (CRM) Application. It highlights our commitment to empowering businesses through intuitive tools and comprehensive features designed to streamline customer interactions and enhance operational efficiency. Discover how our CRM Solutions can help you build stronger customer relationships and achieve your business goals effectively.


# Feedback Form

The "Feedback Form" component allows consumers to submit valuable insights on their experience with our CRM application. Users can provide feedback on specific products, rate their satisfaction, and share comments to help us improve our services. Integrated with user authentication and authorization checks, this form ensures secure and efficient data submission. Upon submission, users receive confirmation through toast notifications.


# Query Form

The "Query Form" component allows consumers to submit inquiries and messages directly through our CRM application. Users can specify their name, subject of the query, and detailed message, ensuring clear communication of their concerns or information needs. Integrated with user authentication and authorization checks, this form ensures secure submission of queries. Upon submission, users receive confirmation through toast notifications, reinforcing our commitment to responsive customer service and efficient query handling within the CRM ecosystem.


## Key Features

- **User and Consumer Authentication:** Ensures that only authenticated users and consumers can access their respective dashboards.
- **Admin Dashboard:** Allows administrators to view and manage customer information, feedback, queries, and communications.
- **Consumer Dashboard:** Provides consumers with forms to submit feedback and queries. Provides an overview of our CRM Application.


## Important Notes

-**Welcome the users:** Once the admin or the consumers login to their respective dashboard, a Welcome meessage along with their name is dispalyed to enhance the user experience.
- **Loader Functions:** `userLoader` and `consumerLoader` functions are used to fetch user and consumer data respectively before rendering the dashboard components. If the user or consumer is not authenticated, they are redirected to the login page.
- **Logout Functionality:** Both dashboard wrappers include a logout function that logs out the user or consumer and redirects them to the login page.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.