import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Library from "../../Library";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Hero from "../Hero";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";
import { userStore } from "../../store/appStore";
const AppRouter = () => {
  const { user } = userStore()

   const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes isAuthenticated={!!user} />,
      children: [{ index: true, element: <Hero /> }],
    },
    {
      path: "library",
      element: <PrivateRoutes isAuthenticated={!!user} />,
      children: [{ index: true, element: <Library /> }],
    },
    {
      path: "auth",
      element: <AuthRoutes />,
      children: [
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
