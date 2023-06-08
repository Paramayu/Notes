const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const router = express.Router()
const models = require('./schema.js')
const middlewares = require("./middlewares.js");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const MONGODB_URI = "mongodb+srv://Notes:notes.database@cluster0.6dirlgp.mongodb.net/?retryWrites=true&w=majority";

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "anyrandomstring",
    cookie: { secure: false },
    store: store,

    // ... other options
  })
);
app.use(router)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.set("view engine", "pug");
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res, next) {
  res.status(200).render("index.pug");
});
49/Notes
app.post("/login", function(req, res, next) {
  req.session.userName = req.body.userName
  res.redirect("/home");
  req.session.save();
})
app.get("/home", (req, res, next) => {
  console.log(req.session);
  res.send("Hello " + req.session.userName);
});
app.listen(8888, () => {
  console.log("Connected on http://127.0.0.1:8000");
});
