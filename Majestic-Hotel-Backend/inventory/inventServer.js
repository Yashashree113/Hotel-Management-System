const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4200;

const app = express();
app.use(cors());
//Creates an instance of a single Route for the given path
const Inventory = require("./routes/inventory");

app.use(bodyParser.json());

app.use("/inventory", Inventory);

app.listen(port, function () {
	console.log("Inventory server running on localhost:" + port);
});


