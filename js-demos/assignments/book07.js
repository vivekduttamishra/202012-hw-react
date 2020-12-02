

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

    toString(){
        return `${this.price}\t${this.rating}\t${this.author}\t${this.title}`;
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
        return this.books.filter(book =>book.author==author);
    }

    getAllTitles(){

        return this.books.map( book=> book.title);

    }

    getTitlesAndPrice(){
        return this.books.map(book=> ({title:book.title,price:book.price}));
    }
    
}

Array.prototype.showAll=function(message){
    console.log(message);
    for(let item of this)
        console.log(item.toString());

    console.log();
}


let manager = new BookManager();

manager.getBooksByAuthor('John Grisham').showAll('John Grisham Books');


manager
    .getAll()
    .filter(b=>b.rating>4.1)
    .map(b=>({title:b.title,author:b.author}))
    .forEach(b=>console.log(b));

