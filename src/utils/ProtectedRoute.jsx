const ProtectedRoute = ({ user, children }) => {
  if (!user) {
  }
  return children;
};

export default ProtectedRoute;
