import { Route, Routes } from "react-router-dom";

import Auth from "./features/auth/components/Auth";
import CreatePost from "./features/post/components/CreatePost";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
