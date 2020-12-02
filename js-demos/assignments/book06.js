

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
    
}




function search( match){
    let result=[];
    for(let item of this){
        if (match(item))
            result.push(item);
    }

    return result;
}

Array.prototype.findAll=search;   //similar to filter

Array.prototype.showAll=function(message){
    console.log(message);
    for(let item of this)
        console.log(item.toString());

    console.log();
}

let manager=new BookManager();
let books=manager.getAll();


books   //all books
    .findAll( b=> b.author=='Vivek Dutta Mishra') //list of selected book
    .showAll('Books By Vivek');  //show list of selected book


books                           //all books
    .findAll(b=>b.price<351)    //list of books under Rs300
    .findAll(b=>b.rating>4)     //and rating >4
    .showAll('Books with price<300 and rating>4');


