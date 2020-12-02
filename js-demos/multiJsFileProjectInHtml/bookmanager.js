
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