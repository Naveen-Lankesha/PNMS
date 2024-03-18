import React from "react";

import localImage from "../assets/background.png";
import logo from "./../assets/logo.svg";


import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Stack,
  Box,
} from "@mui/material";
import Modbutton from "../components/Modbutton";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${localImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}>
      <div>
        <Stack
          direction="row"
          justifyContent="space-between"
          pt={4}
          pl={2}
          pr={10}>
          <Box flex={3}></Box>
          <Box flex={1}>
            <Card sx={{ minWidth: 275, backgroundColor: "#8BD2A0" }}>
              <CardContent>
                <Box display="flex" justifyContent={"center"}>
                  <img src={logo} alt="Logo" />
                </Box>
                <Box display="flex" justifyContent={"space-between"}>
                  <Typography
                    variant="h3"
                    fontSize={42}
                    fontWeight={500}
                    color="black"
                    sx={{ textAlign: "center" }}
                    gutterBottom>
                    Welcome to Haritha Agro Plant Nursery Management system
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}>
                <Modbutton value={"Sign In"}></Modbutton>
              </CardActions>
            </Card>
          </Box>
        </Stack>
      </div>
    </div>
    // <img
    //   src={backgroundImg}
    //   alt="Background"
    //   style={{
    //     width: "70%",
    //     backgroundSize: "cover", // Optional: Cover the entire container
    //     backgroundPosition: "center",
    //   }}
    // />
  );
};

export default Home;
