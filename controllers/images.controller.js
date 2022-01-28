import ApiError from "../utils/errorClass.js";
import Image from "../models/images.model.js";

export const createImage = async (req, res, next) => {
  try {
    const data = await Image.create(req.body);
    res.status(201).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getImage = async (req, res, next) => {
  try {
    const data = await Image.find().populate("product_id");
    res.status(201).send({
      data: data,
      items: data.length,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const updateImage = async (req, res, next) => {
  try {
    const image = await Image.findOne({ _id: req.body.id });

    console.log("image", image);

    if (!image) {
      return next(new ApiError("Image not found", 404));
    }

    const data = await Image.findByIdAndUpdate(req.body.id, req.body, {
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

export const deleteImage = async (req, res, next) => {
  try {
    const image = await Image.findOne({ _id: req.body.id });

    console.log("image", image);

    if (!image) {
      return next(new ApiError("Image not found", 404));
    }

    const data = await Image.findByIdAndDelete(req.body.id);

    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
