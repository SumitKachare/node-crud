import ApiError from "../utils/errorClass.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    console.log("queryStr", queryStr);

    const data = await Product.find(JSON.parse(queryStr)).populate(
      "variants options images"
    );
    res.status(201).send({
      data: data,
      success: true,
      items: data.length,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductDetail = async (req, res, next) => {
  try {
    const { productId } = req.params;

    console.log("productId", productId);

    const data = await Product.findOne({ _id: productId }).populate(
      "variants options images"
    );

    if (!data) {
      return next(new ApiError("Product not found", 404));
    }

    res.status(201).send({
      data: data,
      success: true,
      items: data.length,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.body.id });

    if (!product) {
      return next(new ApiError("Product not found", 404));
    }

    const data = await Product.findByIdAndUpdate(req.body.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(201).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.body.id });

    if (!product) {
      return next(new ApiError("Product not found", 404));
    }

    const data = await Product.findByIdAndDelete(req.body.id);

    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
