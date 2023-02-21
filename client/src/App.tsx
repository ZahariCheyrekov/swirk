import { Route, Routes } from "react-router-dom";

import Auth from "./features/auth/components/Auth";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default App;
