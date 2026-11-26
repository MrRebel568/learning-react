import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { Outlet } from "react-router";
import { Navigate } from "react-router";

const PublicProtected = () => {
  let { loggedInUser } = useContext(Auth);
  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicProtected;
