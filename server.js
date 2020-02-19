var express = require("express");
var app = express();
var mongoose = require("mongoose");
const path = require("path");
const config = require("./config");

const port = config.port;
app.locals.baseURL = config.baseURL;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//router import
app.use("/students", require("./routes/students"));

//database connection
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log("mongo db sucessfully connected");
    });
  })
  .catch(err => {
    console.log(err);
  });

