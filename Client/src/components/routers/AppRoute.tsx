import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LibraryApp from "../../LibraryApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Hero from "../Hero";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";
import { userStore } from "../../store/appStore";
import LibraryScreen from "../library/LibraryScreen";
const AppRouter = () => {
  const { user } = userStore()

   const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes isAuthenticated={!!user} />,
      children: [{ index: true, element: <Hero /> }],
    },
    {
      path: "/",
      element: <PrivateRoutes isAuthenticated={!!user} />,
      children: [{ path: 'library', element: <LibraryApp/>, children:[{index: true,element: <LibraryScreen/>}]}],
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
