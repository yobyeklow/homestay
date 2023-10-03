const mongoose = require("mongoose");

const hostSchema = new mongoose.Schema(
  {
    languages: [
      {
        type: String,
      },
    ],
    bankName: {
      type: String,
    },
    bankNumber: {
      type: String,
    },
    swiftCode: {
      type: String,
    },
    NameOnCard: {
      type: String,
    },
  },
  { timestamps: true }
);

const Host = mongoose.model("Host", hostSchema);
module.exports = Host;
