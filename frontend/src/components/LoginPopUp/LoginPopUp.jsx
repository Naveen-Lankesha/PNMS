import React, { useState } from "react"; // Import the useState hook

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
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
            top: 4,
            right: 4,
            cursor: "pointer",
            color: "orange",
          }}
        />
      </Stack>
      <div>
        <Stack>
          {currState === "Login" ? null : (
            <TextField
              required
              size="small"
              id="outlined-required"
              label="Your Name"
              defaultValue=""
              sx={{ pb: 2 }}
            />
          )}

          <TextField
            required
            size="small"
            id="outlined-required"
            label="Email"
            defaultValue=""
            sx={{ pb: 2 }}
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Password"
            defaultValue=""
            sx={{ pb: 4 }}
          />
          <Button sx={{ p: 1, mb: 2 }} variant="contained">
            <Typography sx={{ fontWeight: 400 }}>
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </Typography>
          </Button>
          <Box>
            {currState === "Login" ? (
              <Typography sx={{ fontSize: 14 }}>
                Creat a new account ?{" "}
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
          </Box>
        </Stack>
      </div>
    </Box>
  );
};

export default LoginPopUp;
