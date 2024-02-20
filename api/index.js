const app = require("../dist/index");
const { createServer } = require("http");
const server = createServer(app);

module.exports = (req, res) => {
  server.emit("request", req, res);
};
