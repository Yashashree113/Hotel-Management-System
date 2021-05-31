const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 4000;
const guest= express();

guest.use(cors());
//Creates an instance of a single Route for the given path
const Guest = require("./routes/guest");

guest.use(bodyParser.json());

guest.use("/guest", Guest);

guest.listen(port, function () {
	console.log("Guest server running on localhost:" + port);
});

