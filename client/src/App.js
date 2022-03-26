import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// import ResponsiveAppBar from "./components/NavBar/NavBar";
import {getPosts} from "./actions/posts"

const App = () => {
  const [data, setData] = useState("")
  
  useEffect(()=> {
    getPosts().then((data) => setData(data))
  }, [])
  return (
    <Container>
      <button onClick={() => {console.log(data.message)}}></button>
      
    </Container>
  );
};

export default App;
