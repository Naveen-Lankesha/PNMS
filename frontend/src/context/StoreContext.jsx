import React, { createContext, useEffect, useState } from "react";

import { shoe_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [size, setSize] = useState({}); // Update the initial state to be an object

  const handleChange = (id, event) => {
    setSize((prevSize) => ({ ...prevSize, [id]: event.target.value }));
  };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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

  const contextValue = {
    size,
    handleChange,
    shoe_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

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
