require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");


app.use(cors());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

app.listen(PORT, () => {
  console.log("server is listening to ", PORT);
});
