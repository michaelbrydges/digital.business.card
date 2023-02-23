import React from "react"; 
import './App.css'
import Info from "./components/info/Info";
import Button from "./components/button/Button";
import About from "./components/about/About";
import Interests from "./components/interests/Interests";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="card--container">
      <Info />
      <div className="card--content--container">
        <Button />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
