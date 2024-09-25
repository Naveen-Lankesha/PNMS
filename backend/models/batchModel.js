import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
batchID: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  moistureLevel: { type: String, required: true },
  startDate: { type: Date, required: true },
  ageOfBatch: { type: String, required: true },
  pottingDate: { type: Date, required: true },
  nextFertilizationDate: { type: Date, required: true },
  nextPesticideApplicationDate: { type: Date, required: true },
  estimatedSaleDate: { type: Date, required: true },
  pottingCompleted: { type: Boolean, default: false }, // New field
  fertilizingCompleted: { type: Boolean, default: false }, // New field
  pesticidingCompleted: { type: Boolean, default: false }, // New field

});

// The expression mongoose.models.batch is checking if there is already a model named "batch" defined in the mongoose.models object. If such a model exists, it will be assigned to batchModel.
const batchModel = mongoose.models.batch || mongoose.model("batch", batchSchema);

export default batchModel;