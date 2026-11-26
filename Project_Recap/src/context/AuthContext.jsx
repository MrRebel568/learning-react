import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registered_user")) || []);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("logged_users")) || null);
  const [isLogginError, setIsLogginError] = useState("");
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
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
