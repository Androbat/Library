import { Navigate, Outlet } from "react-router-dom";

type PrivateProps = {
  isAuthenticated: boolean;
};

const PrivateRoutes: React.FC<PrivateProps> = ({
  isAuthenticated,
}) => {
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet/> : <Navigate to="/auth/signin" replace />;
};

export default PrivateRoutes;
