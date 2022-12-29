const express = require('express');

const app = express();
const port = process.env.PORT || 8080;


app.get("/", async (req, res) => {
  res.json({ status: "hi procamp team" });
});



app.get("/time", async (req, res) => {
  const now = new Date().toString();
  res.json({ time: now });
});


app.listen(port, () => {
  console.log(`App listening on port ${port} 🐙`);
});