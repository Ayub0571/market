import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog } from "./Pages/Blog";
import About from "./Pages/About";
import { Not } from "./Pages/Not";
import { Layout } from "./Routs/Layout";
import { Home } from "./Pages/Home.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import {useState, useEffect} from 'react';
// import "./App.css";
// import { db } from "./firebase-config";
// import{
//   addDoc,
//   collection,
//   doc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

function App() {
  const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(5, 2);
    }, [pathname]);
  };
  useScrollToTop();

  return (

      
     
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/posts' element={<Blog/>}/>
          <Route path='*' element={<Not/>}/>
        </Route>
      </Routes>


      

    

   
  );
}

export default App;
