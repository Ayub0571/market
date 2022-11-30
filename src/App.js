import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import { Not } from "./components/Pages/Not/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home/Home.js";
import { Animal } from "components/Animal/Animal";

import Login from "./components/contextSign/Login";
import SignUp from "./components/contextSign/SignUp";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "components/contextSign/ProtectedRoute";



function App() {
  
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

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

            <Route
              path="/animal"
              element={
                <ProtectedRoute>
                  <Animal />
                </ProtectedRoute>
              }
            />

             
            <Route path="*" element={<Not />} />
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
