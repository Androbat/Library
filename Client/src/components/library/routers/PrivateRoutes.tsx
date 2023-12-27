import { Navigate, Outlet } from "react-router-dom";

type PrivateProps = {
  isAuthenticated: boolean;
  redirectTo?: string;
};

const PrivateRoutes: React.FC<PrivateProps> = ({
  isAuthenticated,
  redirectTo = "/auth/signin",
}) => {


  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
