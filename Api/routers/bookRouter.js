// routes.js
const express = require("express");
const router = express.Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook} = require("../controllers/bookController");

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;