import React from "react";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
