const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const saucesRoutes = require("./routes/sauces");
const usersRoutes = require("./routes/users");
dotenv.config();

const app = express();

const morgan = require("morgan");
const path = require("path");

app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "http://localhost:4200"],
      connectSrc: ["'self'", "http://localhost:3000", "ws://localhost:4200"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
      blockAllMixedContent: [],
      frameAncestors: ["'none'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    browserSniff: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// app.use(cors());
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const user = mongoose.model("User", userSchema);

const uri = process.env.STRING_URI;

mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", usersRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
