const express = require("express");
const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");
const searchRouter = require("./routes/search");

app.use("/users", userRouter);
app.use("/search", searchRouter);
app.listen(3000);
