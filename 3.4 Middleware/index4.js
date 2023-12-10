import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const dir_file = dirname(fileURLToPath(import.meta.url));
const path_html = dir_file + "/public/index.html";
const app = express();
const port = 3000;
let band_name = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandName(req, res, next) {
  band_name = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandName);

app.get("/", (req, res) => {
  res.sendFile(path_html);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band is<h1/><h2>${band_name}<h2/>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
