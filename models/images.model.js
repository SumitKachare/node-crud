import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    position: Number,
    alt: {
      type: String,
      default: null,
    },
    width: Number,
    height: Number,
    src: String,
    variant_ids: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Variant",
      },
    ],
    admin_graphql_api_id: String,
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imagesSchema);

export default Image;
