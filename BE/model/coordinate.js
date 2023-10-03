const mongoose = require("mongoose");

const coordinateSchema = new mongoose.Schema(
  {
    x: {
      type: Number,
      required: [true, "Latitude can not be empty"],
    },
    y: {
      type: Number,
      required: [true, "Longtitude can not be empty"],
    },
  },
  { timestamps: true }
);

const Coordinate = mongoose.model("Coordinate", coordinateSchema);
module.exports = Coordinate;
