const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Pharmacy = require("../../models/PharmacyModel");

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Rejohn",
  });
});

router.post("/", (req, res) => {
  Pharmacy.findOne({ pharmacySlug: req.body.pharmacySlug })
    .exec()
    .then((pharmacy) => {
      if (pharmacy) {
        return res.status(409).json({
          message: "This Phamacy Name Already Exist.",
        });
      } else {
        Pharmacy.findOne({ email: req.body.email })
          .exec()
          .then((pharmacy) => {
            if (pharmacy) {
              return res.status(401).json({
                message: "This Email Already Used.",
              });
            } else {
              bcrypt.hash(req.body.password, 8, (err, hash) => {
                if (err) {
                  return res.status(500).json({
                    message: "Something Happend Wrong. Try Again",
                  });
                } else {
                  const newPharmacy = new Pharmacy({
                    pharmacyName: req.body.pharmacyName,
                    pharmacySlug: req.body.pharmacySlug,
                    email: req.body.email,
                    userType: req.body.userType,
                    password: hash,
                  });
                  newPharmacy.save();

                  return res.status(201).json({
                    message: "Congratulation! New Pharmacy Created.",
                  });
                }
              });
            }
          })
          .catch((err) => {
            return res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
