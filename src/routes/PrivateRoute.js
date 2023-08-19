import { Navigate, Route } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../auth/UserContext";
import Profile from "../components/ProfilePage/ProfilePage";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token, user } = useContext(UserContext);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
