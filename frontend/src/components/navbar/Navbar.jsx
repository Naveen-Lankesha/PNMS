import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import LoginIcon from "@mui/icons-material/Login";
import localImage from "./../../assets/frontend_assets/newlogo.png";

export default function ButtonAppBar({ setShowLogin }) {
  const [activeButton, setActiveButton] = React.useState("Home");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleHomeClick = () => {
    const menuElement = document.getElementById("home");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const handleMenuClick = () => {
  //   const menuElement = document.getElementById("menu");
  //   if (menuElement) {
  //     menuElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const handleContactClick = () => {
    const menuElement = document.getElementById("footer");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          background: "white",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component="div"
            sx={{
              ml: 4,
            }}
          >
            <img
              onClick={() => (window.location.href = "/")}
              src={assets.PNMSlogo}
              style={{ maxHeight: 80, maxWidth: "auto" }}
            />
          </IconButton>
          <Stack
            direction={"row"}
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
>>>>>>> origin/mayumi
            <Link to="/">
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Home" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Home" ? "3px" : "0",
                }}
                onClick={() => {
                  handleHomeClick();
                  setActiveButton("Home");
<<<<<<< HEAD
                }}>
                Home
              </Button>
            </Link>
            <Link to="/#menu">
=======
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/plant-care">
>>>>>>> origin/mayumi
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Menu" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Menu" ? "3px" : "0",
                }}
                onClick={() => {
                  setActiveButton("Menu");
                  // handleMenuClick();
                }}
              >
                Plant Care
>>>>>>> origin/mayumi
              </Button>
            </Link>
            <Link to="/plant-recipes">
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Plant Recipes" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Plant Recipes" ? "3px" : "0",
                }}
                onClick={() => {
                  setActiveButton("Plant Recipes");
                }}
              >
                Plant Recipes
              </Button>
            </Link>
            <Button
              sx={{
                fontSize: { xs: "0.6rem", sm: "1rem" },
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                },
                textDecoration:
                  activeButton === "Contact Us" ? "underline" : "none",
                textDecorationThickness:
                  activeButton === "Contact Us" ? "3px" : "0",
              }}
              onClick={() => {
                setActiveButton("Contact Us");
                handleContactClick();
<<<<<<< HEAD
              }}>
              Contact Us
            </Button>
          </Stack>
          <Link to="/cart">
=======
              }}
            >
              Contact Us
            </Button>
          </Stack>
          {/* <Link to="/cart">
            <Stack direction={"row-reverse"}>
              {getTotalCartAmount() > 0 ? (
                <FiberManualRecordIcon
                  sx={{
                    color: "green",
                    fontSize: "small",
                  }}
                />
              ) : null}

              <ShoppingCartOutlinedIcon
                sx={{ color: "#FD7401" }}
                // onClick={() => {
                //   window.location.href = "/cart";
                // }}
              />
            </Stack>
          </Link> */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              fontSize: { xs: "0.6rem", sm: "1rem" },
              ml: { xs: 1, sm: 4 },
              display: { xs: "none", sm: "inline-flex" },
            }}
            onClick={() => {
              setShowLogin(true);
<<<<<<< HEAD
            }}>
=======
            }}
          >
>>>>>>> origin/mayumi
            Login
          </Button>
          <IconButton
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              ml: 1,
            }}
            onClick={() => setShowLogin(true)}
          >
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
