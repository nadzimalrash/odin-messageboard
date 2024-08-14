const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const app = express();
const path = require("node:path")

app.use(express.urlencoded({ extended: true }));


// ROUTES
app.use("/", indexRouter);
app.use("/new", newMessageRouter);


// VIEWS
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});