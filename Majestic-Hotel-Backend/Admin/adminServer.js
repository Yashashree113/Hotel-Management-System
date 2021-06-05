const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//require("dotenv/config");
const port = 8080;

const user = express();
user.use(cors());
//Creates an instance of a single Route for the given path
const Admin = require("./routes/admin");
const Manager = require("./routes/manager");
const Receptionist = require("./routes/receptionist");

user.use(morgan("dev"));
user.use(express.urlencoded({ extended: false }));
user.use(express.json());

user.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

user.use("/admin", Admin);
user.use("/manager", Manager);
user.use("/receptionist", Receptionist);

user.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

user.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = userlogin;

user.listen(port, function () {
	console.log("Admin server running on localhost:" + port);
});

