const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const port = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/build"));
app.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  require("./route")(app);
  console.log("We're up and running on port " + port + "!");
});
