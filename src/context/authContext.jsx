import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [token, setToken] = useState(10);
  const [data, setData] = useState([]);

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
