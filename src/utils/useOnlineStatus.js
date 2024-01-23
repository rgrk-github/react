import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", (e) => {
      setOnlineStatus(ture);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
