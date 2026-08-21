import http from "http";
const server = http.createServer((req, res) => {
  console.log("server hit by client");
  //res.write("<h1>Hello client</h1>");
  res.end("<h2>Hello client</h2>");
});

server.listen(4444, () => console.log("server is running ..."));
