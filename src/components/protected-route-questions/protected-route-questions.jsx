import { Navigate } from "react-router";

const ProtectedRouteQuestions = ({ condition, children }) => {
  if (condition === null) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRouteQuestions;
