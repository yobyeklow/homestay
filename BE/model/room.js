const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: [40, "Must be less than 40 characters"],
      required: true,
    },
    bedCount: {
      type: Number,
    },
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",
      required: [true, "House can not be empty"],
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
