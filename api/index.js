const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const User = require("./models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const bodyParser = require("body-parser");

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
dotenv.config();

// connect DB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log(">>>> DB CONNECTION ESTABLISHED <<<<"))
  .catch((err) => console.log("COULD NOT CONNECT TO: DB\n", err));

// ENDPOINTS
// register
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error occured" });
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const dbUser = await User.findOne({ email });
    const passwordOk = bcrypt.compareSync(password, dbUser.password);
    // if passwords match - login
    if (passwordOk) {
      res.status(200).json(dbUser);
    } else {
      // otherwise - login error
      res.status(400).json({ message: "wrong credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error occured" });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log("SERVER RUNNING...\n");
});
