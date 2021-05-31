const express=require('express')
const bodyparser=require('body-parser')
//const session = require("express-session");
//const cors = require("cors");  
//const path=require('path')
//const exphbr=require('express-handlebars')
  
//const port= process.env.PORT || 8000

const {mongoose}=require('./models/db')

var admin = require(".Admin/routes/admin.js");
var staff = require("./staff/routes/staff.js");
var guest = require("./guest/routes/guest.js");
var rooms = require("./rooms/routes/rooms.js");
var invent = require("./inventory/routes/inventory.js");
var pay = require("./payment/routes/payment.js");

var app=express()
app.use(bodyparser.urlencoded({
  extended:true
}))
app.use(bodyparser.json())

app.use("/admin", admin);
app.use("/staff", staff);
app.use("/guest", guest);
app.use("/rooms", rooms);
app.use("/inventory", invent);
app.use("/payment", pay);

app.listen(process.env.port || 8000, () => {
  console.log(`App listening on port 8000`);
  console.log(`Press Ctrl+C to quit `);
});

/*app.use("/images", express.static("images"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:4200"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    rolling: true, // <-- Set `rolling` to `true`
    cookie: {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,   // time out 1 Hour
    },
  })
);


app.set('views',path.join(__dirname, '/views/'))

app.engine('hbs',exphbr({extname:'hbs', defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/'}))
app.set('view engine','hbs');
*/

