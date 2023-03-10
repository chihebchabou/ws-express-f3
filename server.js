// Dependencies
const express = require('express');
const path = require('path');

// Initialize application
const app = express();

// User Data
const users = [
  {id: 1, fullName: 'John Doe', email: "john@gmail.com"},
  {id: 2, fullName: 'Jane Doe', email: "jane@gmail.com"},
  {id: 3, fullName: 'Sam Smith', email: "sam@gmail.com"},
];

// app.get('/', (req, res) => {
//   console.log(req.hostname);
//   console.log(req.method);
//   console.log(req.get('Content-Type'));
//   res.send('<h1>home</h1>');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>about</h1>');
// });

// app.get('/contact', (req, res) => {
//   res.send('<h1>contact</h1>'); 
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'), err => {
//     if (err) {
//       console.log(err.message)
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log("Success")
//     }
//   });
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'), err => {
//     if (err) {
//       console.log(err.message)
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log("Success")
//     }
//   });
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'), err => {
//     if (err) {
//       console.log(err.message)
//       res.status(500).send('500 Server Error');
//     } else {
//       console.log("Success")
//     }
//   });
// });

// Define authorize middleware
const authorize = (req, res, next) => {
  const isAuth = true;
  if (isAuth) {
    req.users = users
    next();
  } else {
    res.status(401).send('Not Authorized');
  }
};

// Middlewre use
app.use(authorize);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res) => {
  console.log(req)
  res.send(req.users);
})


// Define port
const port = process.env.PORT || 5000;

// Listen to the port
app.listen(port, () => console.log(`Server is running on port ${port}`));