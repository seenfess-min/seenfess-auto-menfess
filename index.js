
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SEEN FESS BOT is running!");
});

app.get("/callback", (req, res) => {
  res.send("SEEN FESS Callback is ready!");
});

app.post("/callback", (req, res) => {
  console.log("X event received:", req.body);

  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SEEN FESS BOT running on port ${PORT}`);
});
