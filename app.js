const express = require("express"),
  app = express(),
  path = require("path"),
  albumInfo = require("./modules/album-info.js"),
  port = 3000;

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/homepage.html"));
});

app.get("/albums/journey", (req, res) => {
  res.sendFile(path.join(__dirname + "/albums/journey.html"));
});

app.get("/albums/knights", (req, res) => {
  res.sendFile(path.join(__dirname + "/albums/knights.html"));
});

app.get("/albums/wives", (req, res) => {
  console.log(albumInfo[0].albumName);
  // res.sendFile(JSON.stringify(path.join(__dirname + "/modules/album-info.js"));
  // export { albumInfo };
  res.sendFile(path.join(__dirname + "/albums/wives.html"));
});

app.listen(port);
console.log(`server is listening at port: ${port}`);
