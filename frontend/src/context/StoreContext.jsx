import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [shoe_list, setShoeList] = useState([]);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/inventory/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/inventory/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = shoe_list.find((product) => product._id === item);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // fetch data from backend
  const fetchShoeList = async () => {
    const response = await axios.get(`${url}/api/item/list`);
    setShoeList(response.data.data);
  };

  //to keep the items in the cart after refresh
  const loadCartData = async (token) => {
    const response = await axios.post(
      `${url}/api/inventory/get`,
      {},
      {
        headers: { token },
      }
    );
    setCartItems(response.data.cartData);
  };

  //prevet refresh logout
  useEffect(() => {
    async function fetchData() {
      await fetchShoeList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token")); //to keep the items in the cart after refresh
      }
    }
    fetchData();
  }, []);

  const contextValue = {
    shoe_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
