import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  VimeoIcon,
} from "../../../data/icon/myIcons";
import logo from "../../../data/image/digikala.jpg";
import google from "../../../data/image/google-pay.png";
import apple from "../../../data/image/apple-pay.png";
import visa from "../../../data/image/visa-logo-gray.png";

const FooterBottom = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        my: 6,
        mt: 10,
        "& a": {
          color: "black",
          ":hover": { color: "primary.main" },
        },
        "& li": {
          justifyContent: "right",
          px: 0,
          py: 0.8,
        },
      }}
      className="bottom-footer"
    >
      <Stack gap={1} justifyContent="right">
        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            روش‌های پرداخت مطمئن
          </Typography>
          <Stack sx={{ py: 3 }} gap={2} justifyContent="flex-end">
            <Box component="img" src={google} sx={{ width: 60 }} />
            <Box component="img" src={visa} sx={{ width: 60 }} />
            <Box component="img" src={apple} sx={{ width: 60 }} />
          </Stack>
        </Box>

        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            جزئیات اکانت
          </Typography>
          <List>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">حساب من</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">مشاهده سبد خرید</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">لیست علاقه‌مندی‌ها</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">وضعیت سفارش</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">پیگیری سفارش</Typography>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            اطلاعات
          </Typography>
          <List>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">درباره ما</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">ارتباط با ما</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">شرایط و ضوابط</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">بازگشت و تعویض</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">حمل و نقل و تحویل</Typography>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Stack sx={{ width: 1 }} direction="column" alignItems="flex-end">
          <Box component="img" src={logo} sx={{ width: 150, mb: 4, mt: -2 }} />
          <Stack gap={1} sx={{ justifyContent: "right" }}>
            <Link href="#">
              <Typography variant="body2">Example@gmail.com</Typography>
            </Link>
            <Typography variant="body2">ایمیل:</Typography>
          </Stack>
          <Typography variant="body2" sx={{ my: 1 }}>
            ساعات پاسخگویی: 10:00-18:00
          </Typography>
          <Stack
            alignItems="center"
            sx={{
              my: 2,
              "& .MuiIconButton-root": {
                color: "black",
                ":hover": {
                  color: "primary.dark",
                },
              },
            }}
          >
            <IconButton>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <VimeoIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LinkedinIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default FooterBottom;
