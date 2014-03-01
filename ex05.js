var book = function(bookTitle, genre, author, read, readDate){
    this.bookTitle = bookTitle || "unknown Title";
    this.genre = genre || "unknown genre";
    this.author = author || "unknown author";
    this.read = read || false;
    this.readDate = readDate || Date();
};

var firstBook = new book("title1","genre1","Author1",true, "");
console.log("The book is : " + firstBook.bookTitle + " " + firstBook.genre + " " + firstBook.author + " " + firstBook.read +" " + firstBook.readDate);