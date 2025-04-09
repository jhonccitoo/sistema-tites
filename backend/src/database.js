const mongoose = require("mongoose");

const URI = "mongodb+srv://202111367:202111367@cluster0.3bnwcia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
