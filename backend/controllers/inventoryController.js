import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// API for updating shoe size by passing values from select option
// const updateShoeSize = async (req, res) => {
//   try {
//     let userData = await userModel.findOne({ _id: req.body.userId });
//     let shoeSize = await userData.shoeSize;

//     await userModel.findByIdAndUpdate(req.body.userId, {
//       shoeSize: { ...shoeSize, [req.body.itemId]: req.body.size },
//     });

//     // shoeSize[req.body.shoeId] = req.body.size;
//     // await userModel.findByIdAndUpdate(req.body.userId, { shoeSize });
//     res.json({ success: true, message: "Shoe size updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Shoe size not updated" });
//   }
// };

//remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    res.status(200).json({ cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//fetch user shoeSize data
// const getSize = async (req, res) => {
//   try {
//     let userData = await userModel.findOne({ _id: req.body.userId });
//     let shoeSize = await userData.shoeSize;
//     res.status(200).json({ shoeSize });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export { addToCart, removeFromCart, getCart };
