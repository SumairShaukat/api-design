import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "sunmair" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listning on ${port}`);
});
