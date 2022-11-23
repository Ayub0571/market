import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Pages/Blog";
import About from "./components/Pages/About";
import { Not } from "./components/Pages/Not";
import { Layout } from "./components/Routs/Layout";
import { Home } from "./components/Pages/Home.js";
import { Animal } from "components/Animal";

import { AuthContextProvider } from "./components/context/AuthContext";
import Admin from "components/Pages/Admin";
import { useLocation } from "react-router-dom";
import SignUp from "components/contextSign/SignUp";
import Login from "components/contextSign/Login";
import Account from "./Account";
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

            <Route path="/animal" element={<Animal />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<Not />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
