//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const dir_file = dirname(fileURLToPath(import.meta.url));
const path_html1 = dir_file + "/public/index.html";
const path_html2 = dir_file + "/public/secret.html";

const app = express();
const port = 3000;
let isTrue = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPW(req, res, next) {
  if (req.body["password"] === "123456") isTrue = true;
  next();
}

app.use(checkPW);

app.get("/", (req, res) => {
  res.sendFile(path_html1);
});

app.post("/check", (req, res) => {
  if (isTrue) res.sendFile(path_html2);
  else res.sendFile(path_html1);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
