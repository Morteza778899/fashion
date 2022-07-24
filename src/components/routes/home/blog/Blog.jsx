import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { blogPages } from "../../../../data/info/blogData";

const Blog = () => {
  return (
    <Box sx={{my:10}}>
      <Stack direction="column" alignItems="center" gap={5}>
        <Link
          href="#"
          color="black"
          sx={{ whiteSpace: "nowrap", ":hover": { color: "primary.main" } }}
        >
          <Typography variant="h4">آخرین مطالب وبلاگ</Typography>
        </Link>
        <Stack gap={4}>
          {blogPages.map((page) => (
            <Stack direction="column" alignItems="center" gap={1}>
              <Link href='#' sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={page.image}
                  sx={{
                    maxWidth: 370,
                    transition: ".6s all",
                    ":hover": { transform: "scale(1.1)" },
                  }}
                />
              </Link>
              <Typography variant="h6">{page.title}</Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.5 }}>
                {page.date}
                <FaCalendarAlt
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                />
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Blog;
