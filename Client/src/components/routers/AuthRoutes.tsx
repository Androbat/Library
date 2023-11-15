import React, { ReactNode } from "react";

type AuthProps = {
  children: ReactNode;
};

const AuthRoutes: React.FC<AuthProps> = ({ children }) => {
  return <>{children}</>;
};

export default AuthRoutes;
