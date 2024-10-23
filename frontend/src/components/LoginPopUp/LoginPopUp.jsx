import React, { useContext, useEffect, useState } from "react"; // Import the useState hook
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { StoreContext } from "../../context/StoreContext";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate(); // Initialize useNavigate
  const [error, setError] = useState(""); // State for managing error messages

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // login function
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        navigate("/home"); // Navigate to home page after successful login
      } else {
        setError(response.data.message); // Set error message from backend
      }
    } catch (error) {
      console.error("Frontend error:", error); // Log error in frontend console
      setError("An error occurred, please try again.");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form onSubmit={onLogin}>
      <Box sx={{ p: 4 }}>
        <Stack direction={"row"}>
          <h2
            style={{
              cursor: "pointer",
              marginBottom: 30,
              borderBottom: "3px solid orange",
            }}>
            {currState}
          </h2>
          <CloseIcon
            onClick={() => {
              setShowLogin(false);
            }}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              cursor: "pointer",
              color: "orange",
            }}
          />
        </Stack>
        <div>
          <Stack>
            {currState === "Login" ? null : (
              <TextField
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                size="small"
                id="outlined-required"
                label="Your Name"
                defaultValue=""
                sx={{ pb: 2 }}
              />
            )}

            <TextField
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              size="small"
              id="outlined-required"
              label="Email"
              defaultValue=""
              sx={{ pb: 2 }}
            />
            <TextField
              name="password"
              type="password"
              onChange={handleChange}
              value={data.password}
              required
              size="small"
              id="outlined-required"
              label="Password"
              defaultValue=""
              sx={{ pb: 4 }}
            />
            <Button
              type="submit"
              sx={{
                p: 1,
                mb: 2,
                backgroundColor: "green",
                "&:hover": { backgroundColor: "darkgreen" },
              }}
              variant="contained">
              <Typography sx={{ fontWeight: 400 }}>
                {currState === "Sign Up" ? "Create Account" : "Login"}
              </Typography>
            </Button>
            {error && (
              <Typography sx={{ color: "red", mb: 2 }}>
                {error} {/* Display error message */}
              </Typography>
            )}
            {/* <Box>
              {currState === "Login" ? (
                <Typography sx={{ fontSize: 14 }}>
                  Create a new account ?{" "}
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    style={{ color: "#FD7401", cursor: "pointer" }}>
                    Click here
                  </span>
                </Typography>
              ) : (
                <Typography sx={{ fontSize: 14 }}>
                  Already have an account ?{" "}
                  <span
                    onClick={() => setCurrState("Login")}
                    style={{ color: "#FD7401", cursor: "pointer" }}>
                    Login here
                  </span>
                </Typography>
              )}
            </Box> */}
          </Stack>
        </div>
      </Box>
    </form>
  );
};

export default LoginPopUp;
