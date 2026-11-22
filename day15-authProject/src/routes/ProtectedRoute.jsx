import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

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
