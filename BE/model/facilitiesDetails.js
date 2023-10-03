const mongoose = require("mongoose");

const facilitiesDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const FacilitiesDetail = mongoose.model(
  "FacilitiesDetail",
  facilitiesDetailSchema
);
module.exports = facilitiesDetailSchema;
