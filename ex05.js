var book = function(bookTitle, genre, author, read, readDate){
    this.bookTitle = bookTitle || "unknown Title";
    this.genre = genre || "unknown genre";
    this.author = author || "unknown author";
    this.read = read || false;
    this.readDate = readDate || Date();
};

var bookList = function(booksRead,booksNotRead,bookShelf){
    this.booksRead = booksRead || "0";
    this.booksNotRead = booksNotRead || "0";
    console.log(bookShelf);
    this.bookShelf = bookShelf || "no books on shelf";
};


var firstBook = new book("title1","genre1","Author1",true, "");
console.log("The book is : " + firstBook.bookTitle + " " + firstBook.genre + " " + firstBook.author + " " + firstBook.read +" " + firstBook.readDate);

var mylist = new bookList("2", "3", "[A,B]");
console.log("The books Read and Unread are: " + mylist.booksRead + " AND "+ mylist.booksNotRead);
console.log("The bookshelf is : " + mylist.bookShelf);