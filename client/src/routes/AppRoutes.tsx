import { Route, Routes } from "react-router-dom";

import Welcome from "../pages/welcome/Welcome";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Auth from "../features/auth/components/Auth";
import CreatePost from "../features/post/components/CreatePost";
import Profile from "../features/profile/components/Profile";
import PostDetails from "../features/post/components/PostDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/:nickname" element={<Profile />} />
      <Route path="/:nickname/:postId" element={<PostDetails />} />
    </Routes>
  );
};

export default AppRoutes;
