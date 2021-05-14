const mongoose = require("mongoose");

const PharmacySchema = mongoose.Schema({
  pharmacyName: { type: String, required: true },
  pharmacySlug: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  userType: { type: String, required: true },
  password: { type: String, required: true, bcrypt: true },
});

module.exports = mongoose.model("Pharmacy", PharmacySchema);
