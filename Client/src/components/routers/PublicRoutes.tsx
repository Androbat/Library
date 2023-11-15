import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PublicProps = {
  isAuthenticated: boolean;
  children: ReactNode;
};

const PublicRoutes: React.FC<PublicProps> = ({
  isAuthenticated,
  children,
}) => {
  return !isAuthenticated ? children : <Navigate to="/library" replace />;
};

export default PublicRoutes;
