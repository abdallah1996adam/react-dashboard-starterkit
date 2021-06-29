import React, { createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");

  const [isAuth, setIsAuth] = useState(userToken ? true : false);
  const [token, setToken] = useState(userToken ? userToken : null);

  return (
    <authContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider };

export default authContext;
