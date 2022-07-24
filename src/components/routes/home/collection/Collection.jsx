import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ImpulseSpinner } from "react-spinners-kit";
import { useState } from "react/cjs/react.development";
import { man, other, woman } from "../../../../data/info/collectionData";

import Card from "./Card";

const Collection = ({ type }) => {
  const [array, setArray] = useState(woman);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const clickHandler = (arr, p) => {
    if (array !== arr) {
      setLoading(true);
      setPage(p);
      setArray(arr);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 4 }}>
      {type === "third" ? null : (
        <Stack sx={{ mx: 2, alignItems: "center" }} direction="column">
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" textAlign="center">
              {type === "first" ? "دسته بندی" : "مدل‌های جدید"}
            </Typography>
          </Box>
          {type === "first" ? (
            <Stack
              gap={5}
              width="fit-content"
              sx={{
                "& h5": {
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h5"
                onClick={() => clickHandler(woman, 1)}
                sx={{ opacity: array !== woman ? ".5" : "unset" }}
              >
                زنانه
              </Typography>
              <Typography
                variant="h5"
                onClick={() => clickHandler(man, 2)}
                sx={{ opacity: array !== man ? ".5" : "unset" }}
              >
                مردانه
              </Typography>
              <Typography
                variant="h5"
                onClick={() => clickHandler(other, 3)}
                sx={{ opacity: array !== other ? ".5" : "unset" }}
              >
                متفرقه
              </Typography>
            </Stack>
          ) : (
            <Typography variant="body1" className="hurryUP">
              زود باشید!!! فرصت محدوده
            </Typography>
          )}
          {loading ? (
            <Box sx={{ height: 465, mt: 4 }}>
              <ImpulseSpinner />
            </Box>
          ) : (
            <Stack sx={{ mt: 4 }}>
              {array.map((obj) => (
                <Card item={obj} />
              ))}
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
};
export default Collection;
