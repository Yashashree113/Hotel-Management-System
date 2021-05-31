const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8081;

const app = express();
app.use(cors());
//Creates an instance of a single Route for the given path
const Staff = require("./routes/staff");

app.use(bodyParser.json());

app.use("/staff", Staff);

app.listen(port, function () {
	console.log("Staff server running on localhost:" + port);
});

