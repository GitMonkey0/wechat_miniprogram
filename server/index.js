const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "wechat-cloud-hosting-demo",
    message: "Backend is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "Cloud Hosting backend is running",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/echo", (req, res) => {
  res.json({
    ok: true,
    received: req.body || {}
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
