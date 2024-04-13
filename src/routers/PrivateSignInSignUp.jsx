import useAuth from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateSignInSignUp = ({ children }) => {
  const { user, logged } = useAuth();

  if (!user && !logged) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};
PrivateSignInSignUp.propTypes = {
  children: PropTypes.node,
};
export default PrivateSignInSignUp;
