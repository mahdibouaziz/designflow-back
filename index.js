
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

 // res.header("Access-Control-Allow-Origin", "*");
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');


 if (req.method === "OPTIONS") {
  return res.status(200).end();
}
return next();
});


app.use(express.static('public'));
// simple route
//app.get("/", (req, res) => {
 // res.json({ message: "Welcome to bezkoder application." });
//});

app.use('/',require("./routes/lib.controller.js"));

//require("./routes/lib.routes.js")(app);
// set port, listen for requests
//app.listen(3000, () => {
  //console.log("Server is running on port 3000.");
//});
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
