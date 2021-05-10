require("./models/db");
const express = require("express");
const app = express();

app.use(express.json());

// Add Route
const pharmacyRoute = require("./api/routes/Pharmacy");

// use Route
app.use("/pharmacy", pharmacyRoute);

module.exports = app;
