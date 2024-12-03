// router/books.js
const express = require('express');
const router = express.Router();
const books = require('../booklist');

// Get list of all books
router.get('/books', (req, res) => {
    res.json(books);
});

// Get book by ID
router.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

module.exports = router;
