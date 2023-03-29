import React from "react";

import useUser from "../hooks/useUser";
import { UserContextType } from "../types/UserContextType";

export const UserContext = React.createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: { children: any }) => {
  const { user, updateUser } = useUser();

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
