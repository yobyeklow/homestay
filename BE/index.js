const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

//connect database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => console.log(err));

// Routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
//

app.listen(8000, () => {
  console.log("Server is running...");
});
