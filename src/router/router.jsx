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
        element: <AddService></AddService>,
      },
      {
        path: "/managerService",
        element: <ManageService></ManageService>,
      },
      {
        path: "/bookedService",
        element: <BookedServices></BookedServices>,
      },
      {
        path: "/serviceToDo",
        element: <ServiceToDo></ServiceToDo>,
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
