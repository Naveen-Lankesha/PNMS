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
      <Typography
        sx={{
          background: "#111114",
          color: "white",
          textAlign: "center",
          fontSize: 12,
          p: 2,
          borderTop: "2px solid orange",
        }}>
        © 2024 HARITHA AGRO | All Rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
