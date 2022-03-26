import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { Route, Routes} from "react-router-dom"

import NavBar from "./components/NavBar";
import Login from "./components/Login"
import HomePage from "./components/HomePage"
import SignUp from "./components/SignUp"
import { getPosts } from "./actions/posts";

const App = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    
  }, []);
  return (
    <>
      <NavBar user={user}/>

      <Routes>
          <Route exact path="/" element={<HomePage user={user}/>}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />}/>


          <Route path="/products" element={<h1>Test</h1>}/>
        </Routes>
    </>
  );
};

export default App;
