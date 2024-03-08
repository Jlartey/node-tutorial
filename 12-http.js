const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page </p>
    <a> href="/">Back Home</a>
  `);
});

server.listen(5000);

//  console.log(req);
// res.write("Welcome to our home page");
// res.end();

const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("Here is our short history");
//   } else {
//     res.end(`
//       <h1>Oops!</h1>
//       <p>We can't seem to find the page</p>
//       <a href="/">Back Home</a>
//     `);
//   }
// });

// server.listen(5000);
