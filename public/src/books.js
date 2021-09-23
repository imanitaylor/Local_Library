function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}


function findBookById(books, id) {
  return books.find((book) => book.id === id);
}


function partitionBooksByBorrowedStatus(books) {
  let checkedInArr = [];
  let checkedOutArr = [];
  for (let book of books) {
    if (book.borrows[0].returned === true) {
      checkedInArr.push(book);
    } else {
      checkedOutArr.push(book);
    }
  }
  return [checkedOutArr, checkedInArr];
}




function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArr = book.borrows;

  borrowArr.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
})

return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
