import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import Loader from "../components/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);

  if(loader){
    return <Loader></Loader>
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivetRoute;
