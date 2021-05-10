const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/ChatApp",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongodb Connect Succedded");
    } else {
      console.log("Error in DB Connection: ", err);
    }
  }
);
