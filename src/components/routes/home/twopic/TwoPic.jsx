import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../../data/image/banner-fashion-2-02.webp";
import image2 from "../../../../data/image/banner-fashion-2-04.webp";

const TwoPic = () => {
  return (
    <Box
      sx={{
        px: 8,
        "& .title-pic": {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          m: "auto",
          p: 1,
          width: "fit-content",
          height: "fit-content",
          bgcolor: "#ffffffe6",
          "& .MuiTypography-root": {
            textAlign: "center",
            color: "black",
            "&.MuiTypography-subtitle1": {
              color: "#585858",
            },
          },
        },
        "& img": {
          transition: ".5s all",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Grid
        container
        sx={{ height: 550, width: 1, maxWidth: 1200, mx: "auto", my: 5 }}
      >
        <Grid item xs={6} sx={{ p: 2, position: "relative" }}>
          <Box sx={{ overflow: "hidden", width: 1, height: 1 }}>
            <Link href="#">
              <Box
                component="img"
                src={image1}
                sx={{ width: 1, height: 1 }}
              ></Box>
              <Box className="title-pic">
                <Typography variant="h5" fontWeight={900}>
                  کیف و کفش
                </Typography>
                <Typography variant="subtitle1">بهترین‌شو پیدا کن</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ p: 2, position: "relative" }}>
          <Box sx={{ overflow: "hidden", width: 1, height: 1 }}>
            <Link href="#">
              <Box
                component="img"
                src={image2}
                sx={{ width: 1, height: 1 }}
              ></Box>
              <Box className="title-pic">
                <Typography variant="h5" fontWeight={900}>
                  لباس
                </Typography>
                <Typography variant="subtitle1">شیک و برند بپوش</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TwoPic;
