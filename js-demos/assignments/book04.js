

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


let booksByVivek=  search(books,   function(book){return book.author=='Vivek Dutta Mishra'});


showBooks(booksByVivek,'Books By Vivek');


let lowCostBooks=search(books, function(book){return book.price<250;});

showBooks(lowCostBooks,'Low Cost Books');