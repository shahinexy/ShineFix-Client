import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";
import BookedServices from "../pages/BookedServices/BookedServices";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: <PrivetRoute><AddService></AddService></PrivetRoute>,
      },
      {
        path: "/managerService",
        element: <PrivetRoute><ManageService></ManageService></PrivetRoute>,
      },
      {
        path: "/bookedService",
        element: <PrivetRoute><BookedServices></BookedServices></PrivetRoute>,
      },
      {
        path: "/serviceToDo",
        element: <PrivetRoute><ServiceToDo></ServiceToDo></PrivetRoute>,
      },{
        path: '/serviceDetails',
        element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
