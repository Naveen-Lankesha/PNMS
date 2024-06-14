import { Stack, Box, TextField, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div>
      <Stack
        display={"flex"}
        direction={{ sm: "column", md: "row" }}
        spacing={10}
        sx={{ p: 8 }}>
        <Stack flex={1} id="info" spacing={2}>
          <Typography sx={{ fontWeight: "bold" }}>
            Delivery Information
          </Typography>
          <Stack display={"flex"} direction={"row"} spacing={2}>
            <TextField
              flex={1}
              label="Full Name"
              variant="outlined"
              size="small"
            />
            <TextField
              flex={1}
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </Stack>
          <TextField label="Email Address" variant="outlined" size="small" />
          <TextField label="Street" variant="outlined" size="small" />
          <Stack direction={"row"} spacing={2}>
            <TextField label="City" variant="outlined" size="small" />
            <TextField label="State" variant="outlined" size="small" />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <TextField label="Zip Code" variant="outlined" size="small" />
            <TextField label="Country" variant="outlined" size="small" />
          </Stack>
          <TextField label="Phone Number" variant="outlined" size="small" />
        </Stack>

        <Stack flex={1} id="Totals">
          <Box>
            <Typography fontWeight={"bold"} sx={{ mb: 2 }}>
              Cart Total
            </Typography>

            <Stack display={"flex"} flexDirection={"row"}>
              <Stack flex={1}>
                <Typography>Sub Total</Typography>
                <Typography>Delivery Fee</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
              </Stack>
              <Stack flex={1}>
                <Typography id="Sub_Total">£{getTotalCartAmount()}</Typography>
                <Typography id="Delivery_Free">
                  £{getTotalCartAmount() === 0 ? 0 : 2}
                </Typography>
                <Typography id="Total" sx={{ fontWeight: "bold" }}>
                  £{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained">PROCEED TO CHECKOUT</Button>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default PlaceOrder;
