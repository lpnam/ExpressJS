import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let number;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  number = req.body["lName"].length + req.body["fName"].length;
  res.render("index.ejs", { number: number });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
