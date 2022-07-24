import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import QuickView from "./quickView/QuickView";

const Image = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(item.images[0]);
  const [open, setOpen] = useState(false);
  const openHandler = (x) => {
    setOpen(x);
  };
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Link href="#">
        <Box
          component="img"
          src={image}
          sx={{
            width: 270,
            height: 345,
            transition: ".6s all",
            ":hover": {
              transform: "scale(1.08)",
            },
          }}
        ></Box>
      </Link>
      <Stack
        direction="column"
        className="hoverIcon"
        alignItems="flex-end"
        gap={1}
        sx={{
          position: "absolute",
          top: 5,
          right: -42,
          zIndex: 10,
          transition: ".2s all",
          "& .MuiIconButton-root": {
            boxShadow: "0 4px 4px rgb(0 0 0 / 5%)",
            p: 0.5,
            bgcolor: "white",
            ":hover": {
              borderRadius: "20px",
              "& svg": {
                transform: "rotateY(180deg)",
              },
            },
            "& svg": {
              transition: ".2s all",
            },
          },
        }}
      >
        <IconButton color="default" sx={{ width: "fit-content" }}>
          <BsHeart />
        </IconButton>
        <IconButton
          color="default"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => openHandler(true)}
        >
          {hover ? (
            <Typography variant="subtitle2" sx={{ px: 1 }}>
              تماشای سریع
            </Typography>
          ) : null}
          <FaRegEye />
        </IconButton>
      </Stack>
      <Stack
        className="hoverImages"
        direction="column"
        gap={0.5}
        sx={{
          position: "absolute",
          bottom: 5,
          left: -42,
          zIndex: 10,
          transition: ".2s all",
        }}
      >
        {item.images.map((image) => (
          <Box
            component="img"
            src={image}
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              cursor: "pointer",
              ":hover": {
                border: "1px solid black",
              },
            }}
            onMouseOver={() => setImage(image)}
          ></Box>
        ))}
      </Stack>
      <QuickView open={open} openHandler={openHandler} item={item} />
    </Box>
  );
};
export default Image;
