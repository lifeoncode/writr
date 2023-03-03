const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");

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

// posts
app.post("/posts", upload.single("file"), async (req, res) => {
  try {
    // image file processing
    const { originalname, path } = req.file;
    const originalnameArr = originalname.split(".");
    const ext = originalnameArr[originalnameArr.length - 1];
    const newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);

    // persist to DB
    const { title, content, username } = req.body;
    const newDbPost = await Post.create({
      title,
      content,
      cover: newPath,
      username,
    });

    res.status(200).json(newDbPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occured" });
  }
});

// run server
app.listen(PORT, () => {
  console.log("SERVER RUNNING...\n");
});
