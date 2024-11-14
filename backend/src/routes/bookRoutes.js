const express = require("express");
const {
  getBooks,
  addBook,
  deleteBook,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/books", getBooks);
router.post("/books", addBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
