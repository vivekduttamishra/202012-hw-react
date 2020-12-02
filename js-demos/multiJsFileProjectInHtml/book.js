

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









