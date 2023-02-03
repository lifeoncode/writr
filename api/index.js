const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

// configure dotEnv
dotenv.config();
// config express to allow json
app.use(express.json());

// establish mongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(">>>>>>>>>>>>>> connected to mongoDB <<<<<<<<<<<<<<<<<<"))
  .catch((err) => console.log("error occured:\n", err));

app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("SERVER RUNNING.\n");
});
