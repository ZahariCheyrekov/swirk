import { useEffect, useState } from "react";

import { IUserInStorage } from "../interfaces/User";
import { getUser } from "../services/localStorage";

const useUser = () => {
  const [user, setUser] = useState<IUserInStorage>({} as IUserInStorage);

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const updateUser = (user: IUserInStorage) => {
    setUser(user);
  };

  return { user, updateUser };
};

export default useUser;
