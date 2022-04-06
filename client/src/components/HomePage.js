import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const HomePage = ({ user, setUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !localStorage.getItem("profile")) {
      navigate("/login");
    }
  }, [user, navigate]);
  return <div>Home</div>;
};

export default HomePage;
