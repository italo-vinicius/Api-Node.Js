require("dotenv").config();
require("./modules/express");


const connectToDatabase = require("./src/database/connect");
connectToDatabase();
