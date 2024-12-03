// // app.js
// const express = require('express');
// const app = express();
// const booksRouter = require('./router/books');

// // Middleware
// app.use(express.json());

// // Use the books routes
// app.use(booksRouter);

// // Start the server on port 3005
// const PORT = 3005;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// app.js
const express = require('express');
const app = express();
const booksRouter = require('./router/books');

// Middleware
app.use(express.json());

// Hello World route
app.get('/', (req, res) => {
    res.send('Hello, Book API!');
});

// Use the books routes
app.use(booksRouter);

// Start the server on port 3005
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
