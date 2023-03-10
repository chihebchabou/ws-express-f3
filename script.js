const http = require('http');
const fs = require('fs');
const path = require('path');

const users = [
  {id: 1, fullName: 'John Doe', email: "john@gmail.com"},
  {id: 2, fullName: 'Jane Doe', email: "jane@gmail.com"},
  {id: 3, fullName: 'Sam Smith', email: "sam@gmail.com"},
];

const server = http.createServer((req, res)=>{
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content);
      } else {
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end("<h2>500 Server Error</h2>");
      }
    });
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content);
      } else {
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end("<h2>500 Server Error</h2>");
      }
    });
  } else if (req.url === '/contact') {
    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content);
      } else {
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end("<h2>500 Server Error</h2>");
      }
    });
  } else if (req.url === '/api/users') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  }
   else {
    res.writeHead(404);
    res.end("<h1>404 Not found</h1>")
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running on port ${port}`));