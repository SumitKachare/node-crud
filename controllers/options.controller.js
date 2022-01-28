import ApiError from "../utils/errorClass.js";
import Option from "../models/option.model.js";

export const createOption = async (req, res, next) => {
  try {
    const data = await Option.create(req.body);
    res.status(201).send({
      data: data,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getOption = async (req, res, next) => {
  try {
    const data = await Option.find().populate("product_id");
    res.status(201).send({
      data: data,
      items: data.length,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOptions = async (req, res, next) => {
  try {
    const option = await Option.findOne({ _id: req.body.id });

    if (!option) {
      return next(new ApiError("Options not found", 404));
    }

    const data = await Option.findByIdAndUpdate(req.body.id, req.body, {
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

export const deleteOption = async (req, res, next) => {
  try {
    const option = await Option.findOne({ _id: req.body.id });

    if (!option) {
      return next(new ApiError("Options not found", 404));
    }

    const data = await Option.findByIdAndDelete(req.body.id);

    res.status(200).send({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
