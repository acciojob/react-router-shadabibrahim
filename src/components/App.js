
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
