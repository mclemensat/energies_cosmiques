import { createContext, useState, useEffect } from "react";

import { fetchMe } from "../services/api";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const load = async () => {
      setCurrentUser(await fetchMe());
    };

    load();
  }, []);

  return (
    <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider>
  );
}
