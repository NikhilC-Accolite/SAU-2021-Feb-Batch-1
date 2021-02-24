const createBook = (bookId, bookName, bookAuthor,bookCopies,bookPrice,bookRating) => ({
  bookId, 
  bookName, 
  bookAuthor,
  bookCopies,
  bookPrice,
  bookRating
  })

const bookStorage = (books = [], action) => {
    switch (action.type) {
      case 'INSERT_BOOK':
        return [...books, createBook(action.bookId, action.bookName, action.bookAuthor,
          action.bookCopies, action.bookPrice, action.bookRating)]
      default:
        return books
    }
  }
  
export default bookStorage