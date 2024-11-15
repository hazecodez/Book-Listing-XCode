## Testing the API with Postman

1. **Get All Books**
   - URL : [/https://book-listing-app-2sip.onrender.com/api/books](https://book-listing-app-2sip.onrender.com/api/books)
   - Method: GET
   - This endpoint retrieves all books from the database.
   - Expected Response: An array of books, each with id, title, author, and description

2. **Add a New Book**
   - URL : [/https://book-listing-app-2sip.onrender.com/api/books](https://book-listing-app-2sip.onrender.com/api/books)
   - Method: POST
   - Body: Select "raw" and "JSON" format, then provide the following JSON:
````
```
   {
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description"
}
```
````
   - Description: This endpoint adds a new book to the database.
   - Expected Response: The added book’s details, including an automatically generated _id.


3. **Delete a Book by ID**
   - URL : [/https://book-listing-app-2sip.onrender.com/api/books](https://book-listing-app-2sip.onrender.com/api/books/{id})
   - Method: DELETE
   - Replace {id} with the ID of the book you want to delete.
   - Description: This endpoint deletes a specific book from the database.
   - Expected Response: A message indicating that the book was deleted or an error message if the ID is not found.
