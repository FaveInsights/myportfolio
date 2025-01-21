import React from "react";
import Projects from "../components/Projects";
import Dashboards from "../components/Dashboards";
import Hero from "../components/Hero";
import About from "../components/About";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
   <Header />
      <Hero />
      <About />
      <Projects />
      <Dashboards />
     
    </>
  );
};

export default Home;
