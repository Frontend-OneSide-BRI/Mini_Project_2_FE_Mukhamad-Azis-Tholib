import React, { useState, useEffect } from "react";
import { GalleryData } from "../GalleryData";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "../index.css";

const Home = () => {
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
    <div>
    <Navbar />
    <Carousel />
    <div className="AppFilter">
      <div className="mx-20">
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
        <div className="galleryContainer px-5 grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} alt={item.category} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
