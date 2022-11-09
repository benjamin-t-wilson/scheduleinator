const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

const usersRoute = require("./routes/usersRoute.js");

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Successful response.");
});

const port = process.env.S_PORT || 3000;

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);
