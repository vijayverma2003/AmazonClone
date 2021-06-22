import Carousel from "./HomeCarousel";
import HomePageGrids from "./HomePageGrids";
import React from "react";

function Home() {
  return (
    <div clas="home-bg">
      <Carousel />
      <HomePageGrids />
    </div>
  );
}

export default Home;
