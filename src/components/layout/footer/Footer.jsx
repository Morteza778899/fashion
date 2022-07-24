import { Box } from "@mui/material";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <Box component="footer" sx={{}}>
      <FooterTop />
      <FooterBottom />
    </Box>
  );
};
export default Footer;
