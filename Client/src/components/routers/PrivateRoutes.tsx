import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

type PrivateProps = {
  isAuthenticated: boolean;
  children: ReactNode;
};

const PrivateRoutes: React.FC<PrivateProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? children : <Navigate to="signin" replace />;
};

export default PrivateRoutes;
