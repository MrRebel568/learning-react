import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registered_users")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("logged_user")) || null,
  );
  const [isLogginError, setIsLogginError] = useState("");
  

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
        isLogginError,
        setIsLogginError,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
