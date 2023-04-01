import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const GuestGuard = () => {
  const { user} = useContext(UserContext);

  return user._id ? <Navigate to={"/home"} /> : <Outlet />;
};

export default GuestGuard;
