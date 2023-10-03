const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema(
  {
    listing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    availableDate: {
      type: Date,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: "True",
    },
  },
  { timestamps: true }
);

const Calendar = mongoose.model("Calendar", calendarSchema);
module.exports = Calendar;
