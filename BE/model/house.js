const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: [true, "Location can not be empty"],
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Room can not be empty"],
    },
    facilities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FacilitiesType",
        required: [true, "FacilitiesType can not be empty"],
      },
    ],
  },
  { timestamps: true }
);

const House = mongoose.model("House", houseSchema);
module.exports = House;
