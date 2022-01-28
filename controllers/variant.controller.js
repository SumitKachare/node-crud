import ApiError from "../utils/errorClass.js";
import Variant from "../models/variants.model.js";

export const addVariant = async (req, res, next) => {
  try {
    const data = await Variant.create(req.body);
    res.status(201).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getVariant = async (req, res, next) => {
  try {
    const data = await Variant.find().populate("product_id image_id");
    res.status(201).send({
      data: data,
      items: data.length,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const updateVariant = async (req, res, next) => {
  try {
    const variant = await Variant.findOne({ _id: req.body.id });

    if (!variant) {
      return next(new ApiError("Variant not found", 404));
    }

    const data = await Variant.findByIdAndUpdate(req.body.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteVariant = async (req, res, next) => {
  try {
    const variant = await Variant.findOne({ _id: req.body.id });

    if (!variant) {
      return next(new ApiError("Variant not found", 404));
    }

    const data = await Variant.findByIdAndDelete(req.body.id);

    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
