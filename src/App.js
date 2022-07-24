import React, { useEffect, useState } from "react";
import Banner from "./components/routes/home/banner/Banner";
import Blog from "./components/routes/home/blog/Blog";
import Brand from "./components/routes/home/brand/Brand";
import Collection from "./components/routes/home/collection/Collection";
import Slider from "./components/routes/home/slider/Slider";
import TwoPic from "./components/routes/home/twopic/TwoPic";

import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/layout/MainLayout";
import VideoStream from "./components/routes/home/VideoStream";
function App() {
  return (
    <>
      {/* <MainLayout> */}
        {/* <Slider />
        <TwoPic />
        <Brand />
        <Collection type="first" />
        <Banner />
        <Collection type="second" />
        <Blog /> */}
        <VideoStream />
      {/* </MainLayout> */}
    </>
  );
}

export default App;
