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
    this.nextBook = function(bookShelf) {
        //console.log(this.bookShelf);
        return bookShelf[1];
    };
};


var theLordOfTheRings = new book("theLordOfTheRings","fiction","J.R.R",true, "");
var catchingFire = new book("catchingFire", "mystery", "Suzzana Collins",false, "");




var mylist = new bookList(1,1, "[theLordOfTheRings, catchingFire]");
console.log("The books Read and Unread are: " + mylist.booksRead + " AND "+ mylist.booksNotRead);
console.log("The bookshelf is : " + mylist.bookShelf);
console.log("********************************************");
console.log("The next book to read is: " + mylist.nextBook(mylist.bookShelf));