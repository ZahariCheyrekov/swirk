import { Route, Routes } from "react-router-dom";

import Welcome from "../pages/welcome/Welcome";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Auth from "../features/auth/components/Auth";
import CreatePost from "../features/post/components/CreatePost";
import Explore from "../pages/explore/Explore";
import Search from "../features/search/components/Search";
import Bookmarks from "../features/bookmarks/components/Bookmarks";
import Profile from "../features/profile/components/Profile";
import EditProfile from "../features/edit/components/EditProfile";
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
      <Route path="/explore" element={<Explore />} />
      <Route path="/search" element={<Search />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/:nickname" element={<Profile />} />
      <Route path="/:nickname/likes" element={<Profile />} />
      <Route path="/:nickname/comments" element={<Profile />} />
      <Route path="/:nickname/shares" element={<Profile />} />
      <Route path="/:nickname/edit" element={<EditProfile />} />
      <Route path="/:nickname/:postId" element={<PostDetails />} />
    </Routes>
  );
};

export default AppRoutes;
