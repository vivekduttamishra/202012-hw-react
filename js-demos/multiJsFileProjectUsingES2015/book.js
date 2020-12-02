//ES2015 introduces the idea of moduels
//every js file is a module in itself
//export is ES2015 feature to make this class available aoutside book.js module

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

export default Book; //if you are exporting single item









