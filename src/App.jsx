import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/myprojects/Projects";
import Timeline from "./components/timeline/TimelineC";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Blog from "./components/Blog";

const App = () => {
  const [blog, setBlog] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
