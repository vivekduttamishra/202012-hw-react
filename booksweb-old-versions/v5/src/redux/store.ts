
import {createStore,combineReducers} from 'redux';
import { booksReducer,selectedBookReducer } from './features/books/reducers';
import {currentUserReducer} from './features/users/reducers';



//store is a single object with key and value 
//each key is assigned a reducer

const reducers= combineReducers({
    books:booksReducer,
    selectedBook:selectedBookReducer,
    currentUser:currentUserReducer
});

export const store= createStore(reducers);