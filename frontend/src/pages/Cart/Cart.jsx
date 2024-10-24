import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Box, Button, Stack, Typography } from "@mui/material";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  const { shoe_list, cartItems, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  return (
    <Box sx={{ p: 8 }}>
      <Stack display={"flex"} direction={"row"}>
        <Typography flex={1} fontWeight="bold">
          Items
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Name
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Category
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Type
        </Typography>

        <Typography flex={1} fontWeight="bold">
          Price
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Quantity
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Total
        </Typography>
        <Typography flex={1} fontWeight="bold">
          Remove
        </Typography>
      </Stack>
      <hr />
      <br />
      <Box>
        {shoe_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <Stack display={"flex"} direction={"row"}>
                <Box flex={1}>
                  <img
                    src={url + "/images/" + item.image}
                    alt={item.name}
                    style={{ maxWidth: "90px" }}
                  />
                </Box>
                <Typography flex={1}>{item.name}</Typography>
                <Typography flex={1}>{item.category}</Typography>
                <Typography flex={1}>{item.description}</Typography>
                <Typography flex={1}>Rs.{item.price}.00</Typography>
                <Typography flex={1}>{cartItems[item._id]}</Typography>
                <Typography flex={1}>
                  Rs.{item.price * cartItems[item._id]}.00
                </Typography>
                <Box flex={1}>
                  <DeleteOutlineOutlinedIcon
                    cursor="pointer"
                    onClick={() => removeFromCart(item._id)}
                    sx={{ color: "red" }}
                  />
                </Box>
              </Stack>
            );
          }
        })}
      </Box>
      <Stack
        display={"flex"}
        direction={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        }}
        sx={{ mt: 8 }}
      >
        <Box flex={1}>
          <Box>
            <Typography fontWeight={"bold"} sx={{ mb: 2 }}>
              Inventory Total
            </Typography>

            <Date />
            <Stack display={"flex"} flexDirection={"row"}>
              <Stack flex={1}>
                <Typography>Sub Total</Typography>
              </Stack>
              <Stack flex={1}>
                <Typography id="Sub_Total">
                  Rs.{getTotalCartAmount()}.00
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => window.print()}>
              print report
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;