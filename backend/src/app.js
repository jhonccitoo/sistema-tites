const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


//settings
const app = express();
app.set("port",process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());


//Routes
app.use("/api/users",require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));


module.exports = app;