import { createBrowserRouter } from "react-router-dom";
import Library from "../../Library";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Hero from "../Hero";

export const router = createBrowserRouter([
  { path: "/", element: <Hero />},
  { path: "/library", element: <Library />},
  { path: "signin", element: <SignIn />},
  { path: "signup", element: <SignUp />},
]);

