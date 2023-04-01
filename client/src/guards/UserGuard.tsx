import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const UserGuard = () => {
  const { user} = useContext(UserContext);

  return !user._id ? <Navigate to={"/login"} /> : <Outlet />;
};

export default UserGuard;
