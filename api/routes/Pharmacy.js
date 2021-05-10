const express = require("express");
const router = express.Router();
const Pharmacy = require("../../models/PharmacyModel");

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Rejohn",
  });
});

module.exports = router;
