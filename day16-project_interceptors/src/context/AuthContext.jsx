import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registered_User")) || [],
  );

  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("logged_User")) || null,
  );

  const [isLogginError, setIsLogginError] = useState("");


  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedUser,
        setLoggedUser,
        isLogginError,
        setIsLogginError,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
