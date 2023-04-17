import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext<any>(null);

export const AuthProvider = (props: any) => {
  const [loginData, setLoginData] = useState(null);
  // const [registerData, setRegisterData] = useState([]);
  const [storedToken, setStoredToken] = useLocalStorage<string | null>(
    "@accessToken:",
    ""
  );
  return (
    <AuthContext.Provider
      value={{
        loginData,
        setLoginData,
        storedToken,
        setStoredToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
