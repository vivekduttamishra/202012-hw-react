

//client app
let manager = new BookManager();

manager.getBooksByAuthor('John Grisham').showAll('John Grisham Books');


manager
    .getAll()
    .filter(b=>b.rating>4.1)
    .map(b=>({title:b.title,author:b.author}))
    .forEach(b=>console.log(b));
