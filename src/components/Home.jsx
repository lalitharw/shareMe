import { useContext, useEffect, useState } from "react";

// context
import { GoogleUserDataContext } from "../context/context";

// react-router-dom
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const { data, logout } = useContext(GoogleUserDataContext);

  const handleUserLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {data && (
        <>
          <div className="w-screen h-screen flex flex-col justify-center items-center font-semibold">
            <h1>{data[0]?.displayName}</h1>
            <div>
              <button onClick={handleUserLogout}>Logout</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
