//express config
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//express parse
const app = express();
app.use(express.json());

//routes
const schedulerRoutes = require("./routes/schedulerRoutes.js");

//use routes
app.use("/", schedulerRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Connected to DB and running on port http://localhost:${process.env.PORT}/`
    );
  });
});
