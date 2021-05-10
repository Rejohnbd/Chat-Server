const express = require("express");
const router = express.Router();
const Pharmacy = require("../../models/PharmacyModel");

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Rejohn",
  });
});

router.post("/", (req, res) => {
  pharmacyName = req.body.pharmacyName;
  pharmacySlag = req.body.pharmacySlag.toLowerCase();
  console.log(pharmacyName, pharmacySlag);
  console.log(req.body);
});

module.exports = router;
