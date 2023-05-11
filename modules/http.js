const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<marquee>Vai krlhoooooo</marquee>");
  }

  if (req.url == "/users") {
    const users = [
      {
        name: "Itinho delas",
        email: "italo@delas.com",
      },
      {
        name: "John doei",
        email: "Jake@delas.com",
      },
    ];
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`rodando na ${port}`));
