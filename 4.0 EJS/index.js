import express from "express";

const timetrack = {
  day: "",
  action: "",
};
const now = new Date();
const week_day = now.getDay();
if (week_day === 0) {
  timetrack.day = "weekend";
  timetrack.action = "have fun";
} else {
  timetrack.day = "weekday";
  timetrack.action = "work hard";
}

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    day: timetrack.day,
    action: timetrack.action,
  });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is listening on port 3000");
});
