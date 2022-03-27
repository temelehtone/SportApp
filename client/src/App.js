import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate} from "react-router-dom"

import NavBar from "./components/NavBar";
import Login from "./components/Auth/Login"
import HomePage from "./components/HomePage"
import SignUp from "./components/Auth/SignUp"
import { getPosts } from "./actions/posts";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);
  return (
    <>
    {user ? <NavBar user={user} setUser={setUser}/> : null}
      

      <Routes>
          <Route exact path="/" element={<HomePage user={user}/>}/>
          <Route path="/sign-up" element={<SignUp user={user}/>} />
          <Route path="/login" element={<Login user={user}/>}/>


          <Route path="/products" element={<h1>Test</h1>}/>
        </Routes>
    </>
  );
};

export default App;
