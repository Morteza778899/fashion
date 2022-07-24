import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { range } from "lodash";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { TomanIcon } from "../../../../data/icon/myIcons";
import Image from "./Image";

const Card = ({ item }) => {
  return (
    <Box
      sx={{
        mx: 2,
        ":hover": {
          "& .move": {
            transform: "translateY(-45px)",
          },
          "& .hoverIcon": {
            transform: "translateX(-50px)",
          },
          "& .hoverImages": {
            transform: "translateX(50px)",
          },
        },
      }}
    >
      <Stack direction="column" alignItems="center" gap={1}>
        <Image item={item} />
        <Rating name="half-rating" readOnly defaultValue={item.rating} precision={0.5} sx={{'& label':{
          display: 'unset'
        }}}/>
        <Typography variant="h6">{item.title}</Typography>
        <Box
          sx={{
            height: 40,
            overflow: "hidden",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            className="move"
            sx={{
              "& p": { height: 37, direction: "ltr", mb: 1 },
              "& .MuiButton-root": {
                height: 37,
              },
              transition: ".2s all",
            }}
          >
            <Typography variant="body1">{item.price}<TomanIcon sx={{mb:-.5,ml:.8}}/></Typography>
            <Button variant="contained">افزودن به سبد</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
export default Card;
