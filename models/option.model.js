import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  name: String,
  position: Number,
  values: [String],
});

const Option = mongoose.model("Option", optionSchema);

export default Option;
