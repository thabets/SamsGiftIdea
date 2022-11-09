import React, { useState } from "react";
import About from "./Components/About/index";
import Tierpg from "./Components/Teirpage/index";
import Tierone from "./Components/Tier1/index";
import Tiertwo from "./Components/Tier2/index";
import Tierthree from "./Components/Tier3/index";
import Nav from "./Components/Nav/index";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [home, setHome] = useState("about");

  return (
    <div>
      <Nav home={home} setHome={setHome}></Nav>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/tierpg" element={<Tierpg />} />
          <Route path="/tierone" element={<Tierone />} />
          <Route path="/tiertwo" element={<Tiertwo />} />
          <Route path="/tierthree" element={<Tierthree />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
