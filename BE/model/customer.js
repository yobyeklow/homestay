const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    cardNumber: {
      type: String,
    },
    securityCode: {
      type: String,
    },
    NameOnCard: {
      type: String,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
