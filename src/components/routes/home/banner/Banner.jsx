import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import image from "../../../../data/image/banner-fashion2-full.webp";
const BannerStyle = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template: 1fr / repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  .image-container {
    grid-column: 2/8;
    overflow: hidden;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    justify-items: center;
    align-items: center;
    img {
      grid-row: 1/3;
      grid-column: 1/3;
      width: 100%;
      height: 100%;
      transition: 1s transform;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
    h2 {
      grid-row: 1/2;
      grid-column: 2/3;
      align-self: flex-end;
      margin-bottom: 50px;
      font-size: 32px;
      z-index: 5;
    }
    p {
      grid-row: 1/2;
      grid-column: 2/3;
      align-self: flex-end;
      margin-bottom: 5px;
      font-size: 20px;
      color: #5a5a5a;
      z-index: 5;
    }
    button {
      font-size: 18px;
      padding: 15px;
      padding-inline: 20px;
      border-radius: 5px;
      border: none;
      background-color: rgb(23, 198, 170);
      color: white;
      grid-row: 2/3;
      grid-column: 2/3;
      align-self:flex-start;
      margin-top: 25px;
      z-index: 5;
      transition:.3s all;
      cursor: pointer;
      :hover{
        background-color:#333333;
      }
    }
  }
`;
const Banner = () => {
  return (
    <BannerStyle className="container">
      <div className="image-container">
        <img src={image} alt="" />
        <Typography variant='h2'>آرامش خاطر در خرید را با تجربه کنید</Typography>
        <Typography variant='body1'>قاب فروشگاهی پیشرفته</Typography>
        <Button>خرید کن</Button>
      </div>
    </BannerStyle>
  );
};
export default Banner;
