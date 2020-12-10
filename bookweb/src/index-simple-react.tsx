
import {store} from './redux/store';
import {login,logout} from './redux/features/users/actions';

import {getAllBooks,getBookByIsbn,addBook} from './redux/features/books/actions';


const subscriber=()=>{  
  console.log('store updated', store.getState());
}

//when store is updated, we are informed
store.subscribe(subscriber);

console.log('program starts...');

console.log('trying to login with invalid credentials');

store.dispatch(login('vivek','vivek'));

console.log('trying to login with valid credentials');

store.dispatch(login('vivek','admin'));

console.log('getting a list of all books');
store.dispatch(getAllBooks());

console.log('adding a new book');

store.dispatch(addBook({
  "id": "5f4fbb7d6980a8fb2b76e852",
  "isbn": "9781509808694",
  "title": "Kane and Abel",
  "author": "Jeffrey Archer",
  "pages": "250",
  "price": "199",
  "rating": "4.1",
  "votes": "2367",
  "description": "They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune. A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save \u00e2\u20ac\u201c and finally destroy \u00e2\u20ac\u201c each other. \u00e2\u20ac\u02dcThe ultimate novel of sibling rivalry\u00e2\u20ac\u2122 Dan Brown",
  "tags": [
      "fiction",
      "classic",
      "chronology",
      "english"
  ],
  "series": "",
  "seriesIndex": "",
  "releaseDate": "1979-01-01",
  "cover": "/images/books/9781509808694.jpg"
}));

console.log('getting book by id');

store.dispatch(getBookByIsbn('9781393495574'));

console.log('getting book by invalid id');
store.dispatch(getBookByIsbn('97813934955745555'));