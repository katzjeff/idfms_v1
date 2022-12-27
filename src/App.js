import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
