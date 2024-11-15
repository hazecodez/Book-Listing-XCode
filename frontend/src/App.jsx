import { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("https://book-listing-app-2sip.onrender.com/api/books");
    setBooks(response.data);
  };

  const addBook = async (book) => {
    await axios.post("https://book-listing-app-2sip.onrender.com/api/books", book);
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`https://book-listing-app-2sip.onrender.com/api/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Management</h1>
      <AddBook onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default App;
