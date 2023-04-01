import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { IUserInStorage } from "../interfaces/User";
import { getUser } from "../services/localStorage";

const useUser = () => {
  const location = useLocation();
  const [user, setUser] = useState<IUserInStorage>({} as IUserInStorage);

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, [location]);

  const updateUser = (user: IUserInStorage) => {
    setUser(user);
  };

  return { user, updateUser };
};

export default useUser;
