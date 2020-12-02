

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


function matchBooksByAuthor(author){
    return function(book){
        return book.author==author;
    }
}

function priceRange(min,max){
    return function(book){
        return book.price>=min && book.price<max;
    }
}


let manager=new BookManager();
let books=manager.getAll();

let archerBooks= search(books,   matchBooksByAuthor('Vivek Dutta Mishra'));

showBooks(archerBooks, "Books by Vivek Dutta Mishra");

let lowCostBooks=search(books, priceRange(0,250));

showBooks(lowCostBooks, "Low Cost Book");


showBooks(search(books,matchBooksByAuthor("John Grisham")), "Books by John Grisham");





