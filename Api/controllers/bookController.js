const { statusCodes } = require('../helpers/statusCodes');
const BookModel = require('../models/BookModel');

// Create book controller
async function createBook(req, res) {
    const { bookName, bookDescription, publicationYear } = req.body;
    if (!bookName || !bookDescription || !publicationYear) {
        return res.status(statusCodes.BAD_REQUEST_ERROR).send({ message: "Write the book content" })
    }

    const book = new BookModel({
        bookName: bookName,
        bookDescription: bookDescription,
        publicationYear: publicationYear
    })

    await book.save().then(data => {
        res.send({
            message: "Book successfully created",
            book: data
        })
    }).catch(err => {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message || "Error occurred creating book"
        })
    })
}


// Get books
async function getBooks(req, res) {
    try {
        const books = await BookModel.find();

        if (!books){
            return res.status(statusCodes.NOT_FOUND_ERROR).send({ message: "Book not found"});
        }

        return res.status(statusCodes.OK).json({ books });
        
    } catch (err) {

        return res.status(statusCodes.BAD_REQUEST_ERROR).json({ message: err.message });
    }
}

// Get book by id
async function getBookById(req, res) {
    const bookById = req.params.id;
    try {
        const book = await BookModel.findById(bookById);
        res.status(statusCodes.OK).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message || "Book does not exist" });
    }
}


// Update book controller
async function updateBook(req, res) {
    if (!req.body) {
        res.status(statusCodes.BAD_REQUEST_ERROR).send({
            message: "No data to update"
        });
    }

    const bookId = req.params.id;

    await BookModel.findByIdAndUpdate(bookId, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(statusCodes.NOT_FOUND_ERROR).send({
                message: `Book not found.`
            });
        } else {
            res.send({ message: "Book updated successfully." })
        }
    }).catch(err => {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).send({
            message: err.message
        });
    });
}

async function deleteBook(req, res) {
    const id = req.params.id;
    try {
        const bookExist = await Book.findById(id);
        if (!bookExist) {
            return res.status(statusCodes.NOT_FOUND_ERROR).send({ message: "Book does not exist" });
        } else {
            await Book.findByIdAndDelete(id);
            return res.status(statusCodes.OK).send({ message: "Book deleted successfully" });
        }
    } catch (err) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}