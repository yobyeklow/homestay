const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
      required: true,
    },
    calendar: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Calendar",
    },
    title: {
      type: String,
      required: true,
      maxLength: [50, "Must be less than or equal to 50 characters"],
    },
    description: {
      type: String,
      maxLength: [150, "Must be less than or equal to 150 characters"],
      required: true,
    },
    costPerNight: {
      type: Number,
      required: [true, "Cost can not be empty"],
    },
    availability: {
      type: boolean,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
