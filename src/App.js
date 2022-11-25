import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import { Not } from "./components/Pages/Not/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home/Home.js";
import { Animal } from "components/Animal/Animal";

import { AuthContextProvider } from "./components/context/AuthContext";
import Admin from "components/Pages/Admin";
import { useLocation } from "react-router-dom";
import SignUp from "components/contextSign/SignUp";
import Login from "components/contextSign/Login";
import Account from "./Account";
// import { useState, useEffect } from "react";
import { Video } from "./components/Video.js";
import BlogPage from "components/Pages/Blog/BlogPage/BlogPage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/account" element={<Account />} />
            {/* <Route
              path="/commets"
              element={
                <ProtectedRoute>
                  <FeedBack />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/animal" element={<Animal />} />
              <Route path="/admin" element={<Admin />} />

              <Route path="/video" element={<Video />} />

              <Route path="*" element={<Not />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
