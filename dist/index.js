"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
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
