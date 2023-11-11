import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "../../Library";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <Library />},
  { path: "signin", element: <SignIn />},
  { path: "signup", element: <SignUp />},

]);

