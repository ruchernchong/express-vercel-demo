import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.post("/", (req, res) => {
  res.json({ message: "Got a POST request" });
});

app.put("/user", (req, res) => {
  res.json({ message: "Got a PUT request at /user" });
});

app.delete("/user", (req, res) => {
  res.json({ message: "Got a DELETE request at /user" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
