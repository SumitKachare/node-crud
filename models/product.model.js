import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      trim: true,
    },
    body_html: {
      type: String,
      required: [true, "Product HTML is required"],
    },

    vendor: {
      type: String,
    },
    product_type: {
      type: String,
    },
    handle: String,
    published_at: {
      type: Date,
    },
    template_suffix: {
      type: String,
      default: null,
    },
    status: String,
    published_scope: String,
    tags: String,
    admin_graphql_api_id: String,
    variants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Variant",
      },
    ],
    options: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Option",
      },
    ],
    images: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Image",
      },
    ],
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
