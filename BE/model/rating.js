const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    ratingPoint: {
      type: Number,
      required: true,
    },
    ratingDescription: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",
    },
  },
  { timestamps: true }
);

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;
