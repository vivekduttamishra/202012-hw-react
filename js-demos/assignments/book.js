

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

    getBooksByAuthor(author){
        
        let result=[];
        for(let book of this.books)
            if(book.author==author)
                result.push(book);

        return result;

    }

    getBooksInPriceRange(min,max){
        let result=[];
        for(let book of this.books)
            if(book.price>=min && book.price<max)
                result.push(book);

        return result;
    }

    getBooksInRatingRange(min,max){
        let result=[];
        for(let book of this.books)
            if(book.rating>=min && book.rating<max)
                result.push(book);

        return result;
    }

    search(text){
        let result=[];
        for(let book of this.books)
            if(book.title.indexOf(text)>=0 || book.author.indexOf(text)>=0)
                result.push(book);

        return result;
    }
}


function showBooks(books,message=''){

    console.log(message);
    console.log('price\trating\tauthor\ttitle');
    for(let book of books){
        console.log(`${book.price}\t${book.rating}\t${book.author}\t${book.title}`);
    }

}


let manager=new BookManager();

showBooks(manager.getAll(), "All Books");


showBooks(manager.getBooksByAuthor("John Grisham"),"Books by John Grisham");

showBooks(manager.getBooksInRatingRange(4.1,5.0),"High rated books");

showBooks(manager.getBooksInPriceRange(0,200),"Low cost books");