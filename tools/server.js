const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtml);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist/")));

app.listen(9001, function () {
  console.log("Application is running on Port: 9001");
});
