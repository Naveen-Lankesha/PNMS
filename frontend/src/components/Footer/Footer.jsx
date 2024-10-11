import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import localImage from "./../../assets/frontend_assets/newlogo.png";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div id="footer" style={{ marginTop: 30 }}>
      <Stack
        direction={{ md: "column", lg: "row" }}
        sx={{ pl: 8, pr: 8, pt: 8, pb: 4, backgroundColor: "#607274" }}
      >
        <Box flex={1} sx={{ pr: 8 }}>
          <Stack spacing={2}>
            <img
              src={localImage}
              alt="logo"
              style={{
                maxHeight: 150,
                maxWidth: 150,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {/* <Typography
              variant="p"
              sx={{ color: "white", textAlign: "justify" }}>
              CLOUD7 is your one-stop shop for all things footwear. We offer a
              wide variety of shoes for men, women, and children, catering to
              all styles and needs. We focus on providing high-quality shoes at
              competitive prices, all with friendly and knowledgeable customer
              service to help you find the perfect fit.
            </Typography> */}
            <Stack direction="row" spacing={1.5} sx={{ pb: 3 }}>
              <FacebookRoundedIcon style={{ color: "white" }} />
              <InstagramIcon style={{ color: "white" }} />
              <LinkedInIcon style={{ color: "white" }} />
              <XIcon style={{ color: "white" }} />
            </Stack>
          </Stack>
        </Box>
        <Box flex={1} sx={{ pr: 8, pb: 4 }}>
          <Stack spacing={1}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                pb: 2,
                fontWeight: 700,
                borderBottom: "2px solid orange",
              }}
            >
              Company
            </Typography>
            <Typography variant="h7" sx={{ color: "white" }}>
              Home
            </Typography>
            <Typography variant="h7" sx={{ color: "white" }}>
              About Us
            </Typography>
            <Typography variant="h7" sx={{ color: "white" }}>
              Privacy Policy
            </Typography>
          </Stack>
        </Box>
        <Box flex={1} sx={{ pr: 8 }}>
          <Stack spacing={1}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                pb: 2,
                fontWeight: 700,
                borderBottom: "2px solid orange",
              }}
            >
              Get in Touch
            </Typography>
            <Typography variant="h7" sx={{ color: "white" }}>
              +94 77 123 4567
            </Typography>
            <Typography variant="h7" sx={{ color: "white" }}>
              harithaagro@gmail.com
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Typography
        sx={{
          background: "#607274",
          color: "white",
          textAlign: "center",
          fontSize: 12,
          p: 2,
          borderTop: "2px solid orange",
        }}
      >
        © 2024 HARITHA AGRO | All Rights reserved
      </Typography>
    </div>
  );
};

export default Footer;