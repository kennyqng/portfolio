import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="Portfolio">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
