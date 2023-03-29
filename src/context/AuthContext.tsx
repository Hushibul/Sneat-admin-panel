import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = (props: any) => {
  const [loginData, setLoginData] = useState(null);
  // const [registerData, setRegisterData] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        loginData,
        setLoginData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
