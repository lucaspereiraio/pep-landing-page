import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
