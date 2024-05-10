import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(authContext);

  if (user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivetRoute;
