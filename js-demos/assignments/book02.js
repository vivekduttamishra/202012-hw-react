

class Book{

    constructor(title,author, price, rating){
        this.title=title;
        this.author=author;
        this.price=price;
        this.rating=rating;
    }

    static show(book){
        console.log('book',book);
        
    }
}



class BookManager{

    constructor(){
        this.books=[
            new Book("The Accursed God","Vivek Dutta Mishra",299, 4.3),
            new Book("The Brethren","John Grisham",150, 4),
            new Book("Sons of Fortune","Jeffrey Archer",350, 4.8),
            new Book("Summons","John Grisham",200, 3.9),
        ]
    }
    getAll(){
        return this.books;
    }
    
}


function showBooks(books,message=''){

    console.log(message);
    console.log('price\trating\tauthor\ttitle');
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

}


function search(list, match){
    let result=[];
    for(let item of list){
        if (match(item))
            result.push(item);
    }

    return result;
}

function matchBooksByJeffreyArcher(book){

    return book.author=='Jeffrey Archer'; //hard coded parameters
}


//the caller of this function linke 51, doesn't pass additional parameter
function matchBooksByAuthor(book,author){

    return book.author==author; 
}

function matchGoodBooks(book){
    return book.rating>4; //hard coded parameters
}

let manager=new BookManager();

let books=manager.getAll();

let archerBooks= search(books,   matchBooksByJeffreyArcher);

showBooks(archerBooks, "Books by Jeffrey Archer");

let goodBooks=search(books, matchGoodBooks);

showBooks(goodBooks, "Good Books");




