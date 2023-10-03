const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "State can not be empty"],
      maxLength: [50, "MMust be less than or equal to 50 characters"],
    },
    city: {
      type: String,
      required: [true, "City can not be empty"],
      maxLength: [100, "Must be less than or equal to 100 characters"],
    },
    state: {
      type: String,
      required: [true, "State can not be empty"],
      maxLength: [50, "Must be less than or equal to 50 characters"],
    },
    streetAddress: {
      type: String,
      required: [true, "Street Address can not be empty"],
      maxLength: [150, "Must be less than or equal to 150 characters"],
    },
    zipCode: {
      type: String,
      maxLength: [6, "Must be less than or equal to 6 characters"],
    },
    coordinate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coordinate",
      required: [true, "Coordinate can not be empty"],
    },
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
