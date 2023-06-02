import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AppFilter from "./pages/AppFilter"
import Home from "./pages/Home";
import { GalleryData } from "./GalleryData";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BiHome } from "react-icons/bi";

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
