import React, { useContext, useEffect, useState } from "react";
import UserCard from "../components/UserCart";
import { MainContext } from "../context/MainContext";
import { axiosInstance } from "../config/axiosinstance";

const UsersPage = () => {
  let { usersData, setUsersData, isLoading, setisLoading } = useContext(MainContext);
  const getUsers = async () => {
    try {
      const res = await axiosInstance.get("/users");
      setUsersData(res.data);
      console.log(res.data);
      setisLoading(false);
    } catch (error) {
      console.log("error in users api", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [setUsersData]);

  if (isLoading) return <h1 className="text-4xl">Loading Data...</h1>;

  return (
    <div className="grid grid-cols-4 gap-3 mt-3 p-3">
      {usersData.map((val) => {
        return <UserCard key={val.id} user={val} />;
      })}
    </div>
  );
};

export default UsersPage;
