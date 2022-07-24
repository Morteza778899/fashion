import HeaderBottom from "./header/bottom/HeaderBottom";
import HeaderTop from "./header/top/HeaderTop";
import Footer from "./footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderTop />
        <HeaderBottom />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default MainLayout;
