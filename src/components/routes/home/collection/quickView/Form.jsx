import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  ToggleButton,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Form = ({
  color,
  size,
  sizeHandler,
  colorHandler,
  biegeImages,
  blackImages,
  redImages,
}) => {
  const [num, setNum] = useState(1);
  return (
    <>
      <Stack alignItems="center" gap={4} sx={{ m: 2, my: 4 }}>
        <Stack
          flexGrow={1}
          gap={2}
          justifyContent="flex-end"
          sx={{
            "& button": { p: 0, overflow: "hidden" },
            "& .Mui-selected": {
              border: "1px solid black",
            },
          }}
        >
          <Tooltip title="کرمی" TransitionComponent={Zoom} placement="top">
            <ToggleButton
              color="secondary"
              onClick={() => colorHandler("biege")}
              selected={color === "biege" ? true : false}
            >
              <Box
                component="img"
                src={biegeImages[0]}
                sx={{ width: 50, cursor: "pointer" }}
              />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="سیاه" TransitionComponent={Zoom} placement="top">
            <ToggleButton
              color="secondary"
              onClick={() => colorHandler("black")}
              selected={color === "black" ? true : false}
            >
              <Box
                component="img"
                src={blackImages[0]}
                sx={{ width: 50, cursor: "pointer" }}
              />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="قرمز" TransitionComponent={Zoom} placement="top">
            <ToggleButton
              color="secondary"
              onClick={() => colorHandler("red")}
              selected={color === "red" ? true : false}
            >
              <Box
                component="img"
                src={redImages[0]}
                sx={{ width: 50, cursor: "pointer" }}
              />
            </ToggleButton>
          </Tooltip>
        </Stack>
        <Box height="fit-content">
          <Typography variant="h6" fontWeight={900}>
            رنگ:
          </Typography>
        </Box>
      </Stack>

      <Stack alignItems="center" gap={4} sx={{ m: 2, my: 4 }}>
        <Stack flexGrow={1} gap={2} justifyContent="flex-end">
          <ToggleButton
            size="small"
            color="secondary"
            onClick={() => sizeHandler("large")}
            selected={size === "large" ? true : false}
          >
            <Typography>بزرگ</Typography>
          </ToggleButton>
          <ToggleButton
            size="small"
            color="secondary"
            onClick={() => sizeHandler("medium")}
            selected={size === "medium" ? true : false}
          >
            <Typography>متوسط</Typography>
          </ToggleButton>
          <ToggleButton
            size="small"
            color="secondary"
            onClick={() => sizeHandler("small")}
            selected={size === "small" ? true : false}
          >
            <Typography>کوچک</Typography>
          </ToggleButton>
        </Stack>
        <Box height="fit-content">
          <Typography variant="h6" fontWeight={900}>
            سایز:
          </Typography>
        </Box>
      </Stack>

      <Stack alignItems="center" gap={2} sx={{ m: 2, my: 4 }}>
        <Stack sx={{ bgcolor: "#f7f7f8" }} alignItems="center">
          <Typography variant="h5" sx={{ height: "fit-content", px: 3 }}>
            {num}
          </Typography>
          <Stack
            direction="column"
            sx={{
              "& .MuiIconButton-root": {
                color: "black",
                ":hover": {
                  color: "primary.dark",
                },
              },
            }}
          >
            <IconButton size="small" onClick={() => num < 9 && setNum(num + 1)}>
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => num > 1 && setNum(num - 1)}>
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Box flexGrow={1} alignSelf="stretch" sx={{ width: 1 }}>
          <Button variant="contained" sx={{ width: 1, height: 1 }}>
            <Typography variant="h6">افزودن به سبد خرید</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            "& .MuiCheckbox-root": {
              p: 0,
            },
          }}
        >
          <Checkbox
            icon={<FavoriteBorder fontSize="large" />}
            checkedIcon={<Favorite fontSize="large" />}
            sx={{
              transition: ".3s all",
              ":hover": {
                transform: "rotateY(180deg)",
              },
            }}
            color="secondary"
          />
        </Box>
      </Stack>

      <Stack
        sx={{
          "& button": {
            width: 1,
            mx: 1,
            py: 1.2,
            bgcolor: "#efefef",
            boxShadow: "none",
            color: "black",
            ":hover": {
              color: "white",
            },
          },
        }}
      >
        <Button variant="contained" sx={{}}>
          <Typography>تماشای اطلاعات بیشتر</Typography>
        </Button>
        <Button variant="contained">
          <Typography>انصراف</Typography>
        </Button>
      </Stack>
    </>
  );
};
export default Form;
