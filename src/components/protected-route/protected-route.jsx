import { Navigate } from "react-router";

const ProtectedRoute = ({ condition, children }) => {
  if (condition === false) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
