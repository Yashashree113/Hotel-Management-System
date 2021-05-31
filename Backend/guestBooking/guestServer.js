const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 4000;
const guest= express();
require("dotenv/config");

guest.use(morgan("dev"));
guest.use(express.json());
guest.use(express.urlencoded({ extended: false }));
guest.use(cors());
//Creates an instance of a single Route for the given path
const Guest = require("./routes/guestBooking");

guest.use("/guestBooking", Guest);

guest.listen(port, function () {
	console.log("Guest server running on localhost:" + port);
});

