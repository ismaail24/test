import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Contact />
      <Location />
      <Footer />
    </>
  );
};
export default App;
