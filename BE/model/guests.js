const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      require: [true, "Booking can not be empty"],
    },
    guestType: {
      type: String,
    },
    guestNumber: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest;
