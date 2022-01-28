import mongoose from "mongoose";

const priceSchema = new mongoose.Schema(
  {
    amount: String,
    currency_code: String,
  },
  {
    _id: false,
  }
);

const presentmentPrices = new mongoose.Schema(
  {
    price: priceSchema,
    compare_at_price: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);

const variantsSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    title: String,
    price: String,
    sku: String,
    position: Number,
    inventory_policy: String,
    compare_at_price: {
      type: String,
      default: null,
    },
    fulfillment_service: String,
    inventory_management: String,
    option1: {
      type: String,
      default: null,
    },
    option2: {
      type: String,
      default: null,
    },
    option3: {
      type: String,
      default: null,
    },
    taxable: {
      type: Boolean,
      default: true,
    },
    barcode: String,
    grams: Number,
    image_id: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
    },
    weight: Number,
    weight_unit: String,
    inventory_item_id: Number,
    inventory_quantity: Number,
    old_inventory_quantity: Number,
    presentment_prices: [
      {
        type: presentmentPrices,
      },
    ],
    requires_shipping: {
      type: Boolean,
      default: true,
    },
    admin_graphql_api_id: String,
  },
  {
    timestamps: true,
  }
);

const Variant = mongoose.model("Variant", variantsSchema);

export default Variant;
