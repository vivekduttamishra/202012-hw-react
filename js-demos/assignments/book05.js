

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



let manager=new BookManager();
let books=manager.getAll();

//let matchBooksByVivek= function(book){return book.author=='Vivek Dutta Mishra';};

//a lambda function is an anonymous funciton that requires 
//1. remove function keyword
//2. add fat arrow '=>' between fucntion head and body
//let matchBooksByVivek= (book)=>{return book.author=='Vivek Dutta Mishra';};


//a lambda expression  is a lambda function that has a single statement (Generally a return statment) in item
//if you have a single statement inside a lambda function you can use
// 1.drop the function body enclosure {}
// 2. drop the return keyword
// 3. drop the statement end semicolon

let matchBooksByVivek= (book) => book.author=='Vivek Dutta Mishra'   ;


let booksByVivek=  search(books, matchBooksByVivek  );

showBooks(booksByVivek,'Books by Vivek');


//books with rating above 4.1

let highRatedBooks= search(books, book=> book.rating>4.1);

showBooks(highRatedBooks,'High Rated Books');