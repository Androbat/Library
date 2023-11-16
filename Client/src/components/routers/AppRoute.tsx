import { createBrowserRouter } from "react-router-dom";
import Library from "../../Library";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Hero from "../Hero";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

const isLoggedIn = false

export const router = createBrowserRouter([
  { path: '/', element: <PublicRoutes isAuthenticated = {isLoggedIn}/>, children: [{index:true, element: <Hero/>}]},
  { path: "library", element: <PrivateRoutes isAuthenticated = {isLoggedIn}/>, children: [{index: true, element: <Library/>}]},
  { path: "auth", element: <AuthRoutes />, children:[{path:'signin', element:<SignIn/>},{path: "signup", element: <SignUp />}]},
]);

