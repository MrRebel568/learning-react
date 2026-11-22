import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const AuthProtected = () => {
  let { loggedUser } = useContext(Auth);

  if (loggedUser) {
    return <Navigate to={"/main"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProtected;
