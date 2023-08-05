const express = require("express");
const HOSTNAME = '192.168.1.17';
const PORT = process.env.PORT || 8080;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "temperatura iznosi" , temp: 20});
});

app.get("/", (req, res) => {
  res.write("bok");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
});
