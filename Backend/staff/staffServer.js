const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 8081;
const staff= express();
require("dotenv/config");

staff.use(morgan("dev"));
staff.use(express.json());
staff.use(express.urlencoded({ extended: false }));
staff.use(cors());
//Creates an instance of a single Route for the given path
const Staff = require("./routes/staff");

staff.use("/staff", Staff);

staff.listen(port, function () {
	console.log("Staff server running on localhost:" + port);
});

