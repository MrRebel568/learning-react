import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let { loggedUser } = useContext(Auth);
  if (!loggedUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
