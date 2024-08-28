import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  type: { type: String, required: true },
  duration_to_pot: { type: Number, required: true },
  duration_to_fertilize: { type: Number, required: true },
  duration_to_pesticide: { type: Number, required: true },
  duration_to_sell: { type: Number, required: true },
});

// The expression mongoose.models.plant is checking if there is already a model named "plant" defined in the mongoose.models object. If such a model exists, it will be assigned to plantModel.
const plantModel = mongoose.models.plant || mongoose.model("plant", plantSchema);

export default plantModel;