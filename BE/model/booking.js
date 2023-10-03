const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    house: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    updateDate: {
      type: Date,
    },
    bookingStatus: {
      type: String,
      enum: ["Cancelled", "Confirmed", "Completed"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      default: 5,
    },
    guestNumber: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
      },
    ],
  },
  { timestamps: true }
);

const Booking = new mongoose.model("Booking", bookingSchema);
module.exports = Booking;
