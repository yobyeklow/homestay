const mongoose = require("mongoose");

const facilitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    facilitiesDetail: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FacilitiesDetail",
      },
    ],
  },
  { timestamps: true }
);

const FacilitiesType = mongoose.model("FacilitiesType", facilitiesSchema);
module.exports = facilitiesSchema;
