const mongoose = require("mongoose");

const refundSchema = new mongoose.Schema(
  {
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
    refundDate: {
      type: Date,
      required: true,
    },
    tax: {
      type: Number,
      default: 10,
    },
    moneyRefundAfterTax: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Refund = mongoose.model("Refund", refundSchema);
module.exports = Refund;
