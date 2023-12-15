import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { isHome: true });
});

app.get("/create", (req, res) => {
  res.render("index.ejs", { isHome: false });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    isHome: false,
    author: req.body["author"],
    title: req.body["title"],
    descr: req.body["descr"],
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server start on localhost:3000");
});
