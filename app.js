require("./models/db");
const express = require("express");
const app = express();

app.use(express.json());

// For Support Cross Origin Request
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // '*' for any
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }

  next();
});

// Add Route
const pharmacyRoute = require("./api/routes/Pharmacy");

// use Route
app.use("/pharmacy", pharmacyRoute);

module.exports = app;
