import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeWrapper from "./wrappers/HomeWrapper";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDashboardWrapper, {
  userLoader,
} from "./wrappers/UserDashboardWrapper";
import "./App.css";
import CustomerInfo from "./tasks/CustomerInfo";
import Dashboard from "./tasks/dasboard";
import LoginCustomer from "./components/consumerLogin";
import RegisterCustomer from "./components/consumerRegister";
import ConsumerDashboardWrapper, {
  consumerLoader,
} from "./wrappers/consumerDashboard";
import FeedbackForm from "./forms/feedbackForm";
import QueryForm from "./forms/queyForm";
import FeedbackList from "./tasks/Feedbacks";
import QueriesList from "./tasks/Queries";
import CommunicationList from "./tasks/Communications";
import AdminHome from "./components/adminHome";
import UserHome from "./components/userHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "consumerregister",
        element: <RegisterCustomer />,
      },
      {
        path: "consumerlogin",
        element: <LoginCustomer />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <UserDashboardWrapper />,
    loader: userLoader,
    children: [
      {
        path: "",
        element:<AdminHome />
      },
      {
        path: "info",
        element: <CustomerInfo />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "feedback",
        element: <FeedbackList />,
      },
      {
        path: "queries",
        element: <QueriesList />,
      },
      {
        path: "communications",
        element: <CommunicationList />,
      },
    ],
  },
  {
    path: "consumerdashboard",
    element: <ConsumerDashboardWrapper />,
    loader: consumerLoader,
    children: [
      {
        path: "",
        element: <UserHome />,
      },
      {
        path: "feedback",
        element: <FeedbackForm />,
      },
      {
        path: "query",
        element: <QueryForm />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
