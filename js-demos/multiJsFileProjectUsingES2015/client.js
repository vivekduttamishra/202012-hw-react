//to import the default export
import Book from './book';

//to import non-default export
import {BookManager} from './book-manager';

//I want this module to run, but I don't expect to use any method from here.
//method is directly added to Array
import './utils';

//client app
let manager = new BookManager();

manager.getBooksByAuthor('John Grisham').showAll('John Grisham Books');


manager
    .getAll()
    .filter(b=>b.rating>4.1)
    .map(b=>({title:b.title,author:b.author}))
    .forEach(b=>console.log(b));
