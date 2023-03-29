import AppRoutes from "./routes/AppRoutes";
import { UserContextProvider } from "./contexts/UserContext";

import "./App.scss";

const App = () => {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  );
};

export default App;
