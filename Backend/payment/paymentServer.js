const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 5000;

const app = express();
app.use(cors());
//Creates an instance of a single Route for the given path
const Payment = require("./routes/pay");

app.use(bodyParser.json());

app.use("/pay", Payment);

app.listen(port, function () {
	console.log("Payment server running on localhost:" + port);
});


