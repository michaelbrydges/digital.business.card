import React from "react"; 
import './App.css'
import Info from "./components/info/Info";
import About from "./components/about/About";
import Interests from "./components/interests/Interests";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="positioning">
      <div className="main">
        <div className="card">
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
