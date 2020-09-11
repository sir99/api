const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

app.use(bodyParser.json());

dotenv.config();

//import routes
const authRoute = require("./routes/auth");

//route middleware
app.use("/api/user", authRoute);

//connect database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("database connected");
})

app.listen(3000, () => console.log("server running"));