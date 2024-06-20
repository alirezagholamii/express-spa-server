const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, "private.key")),
  cert: fs.readFileSync(path.join(__dirname, "cert.crt")),
};
app.use(cors());

app.use(express.static(path.join(__dirname, "x/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "x/dist/index.html"));
});

https.createServer(options, app).listen(443, () => {
  console.log("Server is running on https://localhost:443");
});
