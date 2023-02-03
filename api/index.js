const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// configure dotEnv
dotenv.config();

// establish mongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log("error occured:\n", err));

app.listen(5000, () => {
  console.log("SERVER RUNNING.\n");
});
