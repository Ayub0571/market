import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Pages/Blog";
import About from "./components/Pages/About";
import { Not } from "./components/Pages/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home.js";
import { Animal } from "components/Animal";

<<<<<<< HEAD
import { AuthContextProvider } from "./components/context/AuthContext";
import Admin from "components/Pages/Admin";
import { useLocation } from "react-router-dom";
import SignUp from "components/contextSign/SignUp";
import Login from "components/contextSign/Login";
import Account from "./Account";
=======
import Login from "./components/contextSign/Login";
import SignUp from "./components/contextSign/SignUp";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "components/contextSign/ProtectedRoute";
// import { useState, useEffect } from "react";
 import { Video } from "./components/Video.js";



>>>>>>> 8c10d55d04bc6d288a083be4ab954a5b5971c4ce
function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

<<<<<<< HEAD
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/account" element={<Account />} />
            {/* <Route
              path="/commets"
              element={
                <ProtectedRoute>
                  <FeedBack />
                </ProtectedRoute>
              }
            /> */}
=======
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
>>>>>>> 8c10d55d04bc6d288a083be4ab954a5b5971c4ce

            <Route path="/animal" element={<Animal />} />
            <Route path="/admin" element={<Admin />} />

             <Route
              path="/video"
              element={<Video/>}/> 

            <Route path="*" element={<Not />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
