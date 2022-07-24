import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import {
  BasketIcon,
  LikeIcon,
  SearchIcon,
} from "../../../../data/icon/myIcons";
import HeaderMiddleMenu from "./HeaderMiddleMenu";
import logo from "../../../../data/image/digikala.jpg";
import HoverMenu from "./hoverMenu/HoverMenu";
import { useState } from "react/cjs/react.development";

const HeaderBotDuplicate = ({ hiddenMenu, isVisible }) => {
  const [hoverStatus, setHoverStatus] = useState(false);
  const [whatHover, setWhatHover] = useState();
  const hoverControler = (x, y) => {
    setHoverStatus(x);
    setWhatHover(y);
  };
  return (
    <Box
      sx={{
        width: 1,
        height: 70,
        position: `${hiddenMenu ? "fixed" : "relative"}`,
        opacity: `${hiddenMenu & isVisible || !hiddenMenu ? "1" : "0"}`,
        visibility: `${
          hiddenMenu & isVisible || !hiddenMenu ? "visible" : "hidden"
        }`,
        bgcolor: "white",
        top: 0,
        zIndex: 1000,
        transition: "0.3s all",
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: 1, maxWidth: 1200, mx: "auto", px: 4 }}
      >
        <Box component="img" src={logo} sx={{ width: 150, height: 60 }}></Box>
        <HeaderMiddleMenu hoverControler={hoverControler} />
        <Stack>
          <IconButton color="default">
            <SearchIcon fontSize="large" />
          </IconButton>
          <IconButton color="default">
            <Badge
              badgeContent={6}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "black",
                  color: "white",
                  bottom: 4,
                  left: 3,
                  fontFamily: "monospace",
                },
              }}
            >
              <LikeIcon fontSize="large" />
            </Badge>
          </IconButton>
          <IconButton color="default">
            <Badge
              badgeContent={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "black",
                  color: "white",
                  bottom: 4,
                  left: 3,
                  fontFamily: "monospace",
                },
              }}
            >
              <BasketIcon fontSize="large" />
            </Badge>
            <Typography sx={{ px: 1 }}>$34.99</Typography>
          </IconButton>
        </Stack>
      </Stack>
      {whatHover === "woman" && (
        <HoverMenu
          hoverControler={hoverControler}
          hoverStatus={hoverStatus}
          whatHover="woman"
        />
      )}
      {whatHover === "man" && (
        <HoverMenu
          hoverControler={hoverControler}
          hoverStatus={hoverStatus}
          whatHover="man"
        />
      )}
    </Box>
  );
};
export default HeaderBotDuplicate;
