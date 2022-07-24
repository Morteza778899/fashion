import {
  Box,
  ClickAwayListener,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";

import image1 from "../../../../../data/image/product-01.webp";
import image2 from "../../../../../data/image/product-02.webp";
import image3 from "../../../../../data/image/product-03.webp";
import image4 from "../../../../../data/image/product-04.webp";
import image5 from "../../../../../data/image/product-05.webp";
import image6 from "../../../../../data/image/product-06.webp";
import image7 from "../../../../../data/image/product-07.webp";
import image8 from "../../../../../data/image/product-08.webp";
import image9 from "../../../../../data/image/product-09.webp";
import Details from "./Details";
import Form from "./Form";
import { DownIcon } from "../../../../../data/icon/myIcons";
import Slider from "./Slider";
const biegeImages = [image1, image2, image3];
const blackImages = [image4, image5, image6];
const redImages = [image7, image8, image9];

const QuickView = ({ openHandler, open }) => {
  const [images, setImages] = useState(biegeImages);
  const [size, setSize] = useState("medium");
  const [color, setColor] = useState("biege");
  const allImage=[...biegeImages,...blackImages,...redImages]
  const sizeHandler = (x) => {
    setSize(x);
  };
  const colorHandler = (x) => {
    setColor(x);
  };
  return (
    <Modal open={open} sx={{ overflow: "auto", py: 5 }}>
      <ClickAwayListener onClickAway={() => openHandler(false)}>
        <Box
          sx={{
            maxWidth: 1000,
            bgcolor: "white",
            mx: "auto",
            borderRadius: 1,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  m: 2,
                  "& .MuiIconButton-root": {
                    position: "absolute",
                    zIndex: 20,
                    top: "45%",
                    color: "black",
                    bgcolor: "#8f8f8f1f",
                    ":hover": {
                      bgcolor: "#17c6a968",
                      color: "white",
                    },
                    transition: ".3s all",
                  },
                }}
              >
                 <Slider allImage={allImage} slidesPerView={1}/>
                 {/* <Slider allImage={allImage} slidesPerView={3}/> */}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ m: 2 }}>
                <Details />

                <Form
                  color={color}
                  size={size}
                  sizeHandler={sizeHandler}
                  colorHandler={colorHandler}
                  biegeImages={biegeImages}
                  blackImages={blackImages}
                  redImages={redImages}
                />

                <Typography></Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ClickAwayListener>
    </Modal>
  );
};
export default QuickView;
