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

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = shoe_list.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
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

//----------------------------------------------------

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// import { shoe_list } from "../assets/frontend_assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [size, setSize] = useState({}); // Update the initial state to be an object

//   const handleChange = (id, event) => {
//     setSize((prevSize) => ({ ...prevSize, [id]: event.target.value }));
//   };

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const newCartItems = { ...prev };
//       if (newCartItems[itemId] > 1) {
//         newCartItems[itemId] -= 1;
//       } else {
//         delete newCartItems[itemId];
//       }
//       return newCartItems;
//     });
//   };

//   // useEffect(() => {
//   //   fetch("http://localhost:5001/all-items")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       const initialCartItems = {};
//   //       data.forEach((item) => {
//   //         if (item.quantity > 0) {
//   //           initialCartItems[item._id] = item.quantity;
//   //         }
//   //       });
//   //       setCartItems(initialCartItems);
//   //     });
//   // }, []);

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       let itemInfo = shoe_list.find((product) => product._id === item);
//       totalAmount += itemInfo.price * cartItems[item];
//     }
//     return totalAmount;
//   };

//   const contextValue = {
//     size,
//     handleChange,
//     shoe_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

//------------------------------------------

// import React, { createContext, useEffect, useState } from "react";

// import { shoe_list } from "../assets/frontend_assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [size, setSize] = React.useState({});

//   const handleChange = (event) => {
//     setSize(event.target.value);
//   };

//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

//   const contextValue = {
//     size,
//     handleChange,
//     shoe_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;

//NIKINI
// const addToCart = (itemId) => {
//   if (!cartItems[itemId]) {
//     setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//   } else {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   }
// };

// const removeFromCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
// };

// useEffect(() => {
//   fetch("http://localhost:5001/all-items").then(res => res.json()).then(data => console.log(data))
//  }, []);
