import { Navigate, Outlet } from "react-router-dom";

type PublicProps = {
  isAuthenticated: boolean;
};

const PublicRoutes: React.FC<PublicProps> = ({
  isAuthenticated,

}) => {
  console.log(isAuthenticated);

  return isAuthenticated ? <Navigate to="/library" replace /> : <Outlet />;
};

export default PublicRoutes;
