import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import logo from "./images/Logo.png"
import { getPosts } from "./actions/posts"

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <Container>
      <img src={logo} style={{ width: "100px" }} />
    </Container>
  );
};

export default App;
