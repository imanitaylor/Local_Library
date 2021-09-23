//takes in an array of objects, looks at each objects id and compares it to the given id.
//since we don't need all accounts then we use the find() method to get the first id that matches
function findAccountById(accounts = "No account given.", id = "No ID given.") {
 let foundAccId = accounts.find((account) => account.id === id);
 return foundAccId;
}


//look into the accounts array, then look into each account, once each account is accessed
//we want to look at the name object and get that last name
//for each account we want to make the entire name lowercase and sort alphabetically
function sortAccountsByLastName(accounts) {
accounts.sort((person1, person2) => person1.name.last.toLowerCase() < person2.name.last.toLowerCase() ? -1 : 1);
return accounts;
}



function getTotalNumberOfBorrows(account, books) {
let counter = 0;
for (let book of books){

  for (let borrow of book.borrows){
    if(borrow.id === account.id){
      counter++
    }
  }
}
return counter;
}


function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter((book) => {
    //filtering the books by account and not returned
   let firstEntry = book.borrows[0];
   return firstEntry.id === account.id && firstEntry.returned === false
 });
 //appending the checked out book with author that matches author id
 const checkedOutWithAuthor = checkedOutBooks.map((book) => {
   const author = authors.find((author) => author.id === book.authorId )
   return {
     ...book, 
     author: author
   };
 })
   return checkedOutWithAuthor;
  
 }








module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
