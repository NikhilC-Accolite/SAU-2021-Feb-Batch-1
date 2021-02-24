let bookId = 17347;

export const insertBook = (bookName,bookAuthor,bookCopies,bookPrice,bookRating) => {
    return { 
        type: 'INSERT_BOOK', bookId:bookId++, bookName, bookAuthor, bookCopies,bookPrice,bookRating
     }
}