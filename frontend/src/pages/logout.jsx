import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Logout = () => {
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage and context
    localStorage.removeItem("token");
    setToken("");

    // Redirect to login page after logging out
    navigate("/");
  }, [setToken, navigate]);

  return <h2>Logging out...</h2>; // Optionally show a message or loading indicator
};

export default Logout;
