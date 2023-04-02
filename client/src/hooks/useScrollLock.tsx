import { useEffect, useState } from "react";

const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  const toggleScrollLock = () => {
    setIsLocked((prevState) => !prevState);
  };

  return { isLocked, toggleScrollLock };
};

export default useScrollLock;
