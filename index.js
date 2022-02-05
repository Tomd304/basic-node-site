const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8080;

const index = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");
const contactMe = fs.readFileSync("contact-me.html");
const notFound = fs.readFileSync("404.html");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      res.end(index);
      break;
    case "/about":
      res.end(about);
      break;
    case "/contact-me":
      res.end(contactMe);
      break;
    default:
      res.end(notFound);
      break;
  }
});

server.listen(8080, () => {
  console.log("server running");
});
