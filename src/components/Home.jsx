import { useContext, useEffect, useState } from "react";

// context
import { GoogleUserDataContext } from "../context/context";

// react-router-dom
import { useNavigate } from "react-router-dom";



// components
import { Header } from "./common/header";
import { MasonryLayout } from "./common/Masory";

export const Home = () => {
  const navigate = useNavigate();

  const { data, logout } = useContext(GoogleUserDataContext);

  const handleUserLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center  px-[20px]  py-[50px]">
        <MasonryLayout />
      </div>
    </>


  );
};
