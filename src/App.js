import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { GalleryData } from "./GalleryData";
import "./index.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <AppFilter />
    </div>
  );
}

function AppFilter() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.category))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.category === itemData);
    setData(filterData);
  };

  return (
    <div className="AppFilter">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} alt={item.category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
