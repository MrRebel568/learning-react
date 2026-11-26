import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { Outlet } from "react-router";
import { Navigate } from "react-router";

const ProtectedRoute = () => {
  let { loggedInUser } = useContext(Auth);
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
