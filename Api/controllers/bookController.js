const BookModel = require('../models/BookModel');

// Create book controller
async function createBook(req, res) {
    const { bookName, bookDescription, publicationYear } = req.body;
    if (!bookName || !bookDescription || !publicationYear){
       return res.status(400).send({ message: "Write the book content"})
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
        res.status(500).send({
            message: err.message || "Error occurred creating book"
        })
    })  
}


// Get books
async function getBooks(req, res){
    try {
        const books = await BookModel.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(404).json({ message: err.message});
    }
}

// Get book by id
async function getBookById(req, res){
    const bookById = req.params.id;
    try {
        const book = await BookModel.findById(bookById);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message || "Book does not exist"});
    }
}


// Update book controller
async function updateBook(req, res){
    if (!req.body){
        res.status(400).send({
            message: "No data to update"
        });
    }

    const bookId = req.params.id;
    
    await BookModel.findByIdAndUpdate(bookId, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Book not found.`
            });
        }else{
            res.send({ message: "Book updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

async function deleteBook(req, res){
    const bookToRemoveById = req.body.id;
    await BookModelModel.findByIdAndRemove(bookToRemoveById).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Book not found.`
          });
        } else {
          res.send({
            message: "Book deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
}
// Read a book - get a book
// Delete a book

  module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
  }