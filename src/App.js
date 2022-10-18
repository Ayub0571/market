import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog } from "./Pages/Blog";
import About from "./Pages/About";
import { Not } from "./Pages/Not";
import { Layout } from "./Routs/Layout";
import { Home } from "./Pages/Home.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Dolphin } from "marine_inhabitants/Dolphin";

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blog />} />
        {/* <Route path="/bear" element={<Polar_bear />} /> */}
        {/* <Route path="/penguin" element={<Penguin />} /> */}
        {/* <Route path="/calf" element={<Sea_calf />} /> */}
        {/* <Route path="/otter" element={<Sea_otter />} /> */}
        {/* <Route path="/turtle" element={<Sea_turtle />} /> */}
        <Route path="/dolphin" element={<Dolphin />} />
        {/* <Route path="/octopus" element={<Octopus />} /> */}
        {/* <Route path="/shark" element={<Shark />} /> */}
        {/* <Route path="/killer_whale" element={<Killer_whale />} /> */}
        <Route path="/animal" element={<Dolphin />} />
        <Route path="*" element={<Not />} />
      </Route>
    </Routes>
  );
}

export default App;
