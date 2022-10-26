import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import  Blog  from "./components/Pages/Blog";
import {About} from "./components/Pages/About";
import { Not } from "./components/Pages/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home.js";
import { Animal } from "components/Animal";

import Login from "./components/contextSign/Login";
import SignUp from "./components/contextSign/SignUp";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";

function App() {
  return (
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/animal" element={<Animal />} />
            
            <Route path="*" element={<Not />} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
  
  );
}



export default App;
