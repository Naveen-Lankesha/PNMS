import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://plant_nursery:Ayubowan1190!@plant-nursery.adlmdyw.mongodb.net/plant-nursery?retryWrites=true&w=majority&appName=plant-nursery"
    )
    .then(() => console.log("connected to db"));
};