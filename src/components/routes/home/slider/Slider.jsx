import React from "react";
import { useState } from "react";
import image2 from "../../../../data/image/two.webp";
import image1 from "../../../../data/image/one.jpg";
// Core modules imports are same as usual
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/effect-fade/effect-fade.scss"; // effect-fade module
import { Box, IconButton } from "@mui/material";
import { DownIcon } from "../../../../data/icon/myIcons";
import SliderText from "./SliderText";
const images = [image1, image2];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box
      sx={{
        "& .swiper-pagination": {
          width: "fit-content",
          mx: "auto",
          left: 0,
          right: 0,
          bottom: 30,
          bgcolor: "#cecece8b",
          borderRadius: 5,
          pb: 0.6,
          px: 1,
          "& .swiper-pagination-bullet": {
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "black",
            opacity: 1,
            transition: ".2s all",
          },
          "& .swiper-pagination-bullet-active": {
            width: 15,
            height: 15,
            backgroundColor: "unset",
            border: "2px solid #10927c",
            mb: -0.4,
          },
        },
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%" }}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        pagination={{ clickable: true }}
        loop
        effect="fade"
        autoplay={{
          delay: 5000,
        }}
        onSlideChange={(Swiper) => setCurrentSlide(Swiper.realIndex)}
      >
        {images.map((image) => (
          <SwiperSlide>
            <IconButton
              sx={{
                position: "absolute",
                transform: "rotate(-90deg)",
                zIndex: 20,
                right: 10,
                top: "45%",
                color: "black",
                bgcolor: "#ffffff45",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
                transition: ".3s all",
              }}
              id="swiper-forward"
            >
              <DownIcon fontSize="large" />
            </IconButton>
            <Box
              sx={{
                width: 1,
                height: 1,
                position: "absolute",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
                zIndex: 2,
                overflow: "hidden",
              }}
            ></Box>
            <Box component="img" src={image} sx={{ width: 1 }}></Box>
            <IconButton
              sx={{
                position: "absolute",
                transform: "rotate(90deg)",
                zIndex: 20,
                left: 10,
                top: "45%",
                color: "black",
                bgcolor: "#ffffff45",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
                transition: ".3s all",
              }}
              id="swiper-back"
            >
              <DownIcon fontSize="large" />
            </IconButton>
            <SliderText currentSlide={currentSlide}/>ّ
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Slider;
