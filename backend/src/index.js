const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const userRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const analyticsRouter = require("./routes/analytics.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/analytics", analyticsRouter);

app.get("/", (req, res) => {
  return res.send("Hello backend");
});

app.listen(8080, async () => {
  try {
    await connect();
    console.log("mongodb connection established");
    console.log("listening on http://localhost:8080");
  } catch (error) {
    console.log(error.message);
  }
});
