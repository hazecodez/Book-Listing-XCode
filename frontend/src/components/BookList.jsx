import PropTypes from "prop-types";

const BookList = ({ books, onDelete }) => {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <div key={book._id} className="p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-sm text-gray-600">Author: {book.author}</p>
          <p>{book.description}</p>
          <button
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onDelete(book._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;

BookList.propTypes = {
  books: PropTypes.array,
  onDelete: PropTypes.func,
};
