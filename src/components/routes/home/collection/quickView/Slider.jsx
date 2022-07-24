import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";
import "swiper/modules/free-mode/free-mode.scss";
import { Box, IconButton } from "@mui/material";
import { DownIcon } from "../../../../../data/icon/myIcons";
import { useState } from "react";

const Slider = ({ allImage, slidesPerView }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const [index, setIndex] = useState();
  return (
    <Box
      sx={{
        "& .swiper-slide-thumb-active": {
          "& img": {
            opacity: 1,
          },
        },
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: "#swiper-forward",
          prevEl: "#swiper-back",
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {allImage.map((imgae) => (
          <SwiperSlide>
            {slidesPerView === 1 && (
              <>
                <IconButton
                  sx={{
                    right: 10,
                    transform: "rotate(-90deg)",
                  }}
                  id="swiper-forward"
                >
                  <DownIcon fontSize="large" />
                </IconButton>
                <IconButton
                  sx={{
                    transform: "rotate(90deg)",
                    left: 10,
                  }}
                  id="swiper-back"
                >
                  <DownIcon fontSize="large" />
                </IconButton>
              </>
            )}
            <Box component="img" src={imgae} sx={{ width: 1 }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {allImage.map((imgae) => (
          <SwiperSlide>
            <Box
              component="img"
              src={imgae}
              sx={{
                width: 1,
                my: 2,
                cursor: "pointer",
                opacity: 0.5,
                ":hover": {
                  opacity: 0.8,
                },
                transition: ".2s all",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Slider;
