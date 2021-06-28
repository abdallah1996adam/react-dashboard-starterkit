// Todo ->
import { createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [isAuth, setisAuth] = useState(token ? true : false);
};
