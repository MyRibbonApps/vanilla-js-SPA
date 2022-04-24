const express = require("express");
const path = require("path");

const app = express();

app.use("/bundle", express.static(path.resolve(__dirname, "bundle")));
//If we want to use another specific route for example password resets that is supposed to be another html file
// app.use("/resets", express.static(path.resolve(__dirname, "frontend/src/resets")));

app.post("/isloggedin", (req, res) => {
  res.send("This is for making a api request to the server");
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend/src", "index.html"));
});

app.listen(3000, () => console.log("Listening"));
