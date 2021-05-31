const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const port = 4000;
const rooms = express();

//Creates an instance of a single Route for the given path
const Rooms = require("./routes/rooms");

rooms.use(morgan("dev"));
rooms.use(express.json());
rooms.use(express.urlencoded({ extended: false }));
rooms.use(cors());

rooms.use("/rooms", Rooms);

rooms.listen(port, function () {
	console.log("Rooms server running on localhost:" + port);
});

