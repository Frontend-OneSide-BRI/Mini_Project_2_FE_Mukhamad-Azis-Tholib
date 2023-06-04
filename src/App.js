import React from "react";
import Home from "./pages/Home";
import AppFilter from "./pages/AppFilter"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<AppFilter/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
