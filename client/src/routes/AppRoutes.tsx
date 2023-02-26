import { Route, Routes } from "react-router-dom";

import Welcome from "../pages/welcome/Welcome";
import Home from "../pages/home/Home";
import Auth from "../features/auth/components/Auth";
import CreatePost from "../features/post/components/CreatePost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
};

export default AppRoutes;
