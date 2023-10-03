const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Customer: {
      type: mongoose.Schema.Types.ObjectId,
    },
    Host: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      require: [true, "Please fill your name"],
    },
    photo: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: [
        /(0[3|5|7|8|9])+([0-9]{8})\b/,
        "Please fill a valid phone number",
      ],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password must be minimum 8 characters"],
      min: [20, "Password must be maximum 20 characters"],
    },
    gender: {
      type: String,
      enum: ["Nam", "Nữ"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
