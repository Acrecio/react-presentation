/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

var SERVER_PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080
var SERVER_IP = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/health", function(req, res) {
  res.send(200);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(SERVER_PORT, SERVER_IP, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
