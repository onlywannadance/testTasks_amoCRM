import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <div className="purpleBall"></div>
      <div className="redBall"></div>
      <div className="redBall_small"></div>
      <div className="purpleLight"></div>
      <div className="redLight"></div>
    </div>
  );
}

export default App;