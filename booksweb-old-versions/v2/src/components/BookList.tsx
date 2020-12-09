import React from 'react';
import { Book } from '../model/Book';

interface BookListProps{
    books:Book[];
}


export const BookList=({books}:BookListProps)=>{
    return (
        <div>
            <h1>Book List</h1>
            <table className='table table-responsive table-hover table-stripes' >
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        books.map( book=>(
                            <tr key={book.isbn}>
                                <td><img src={book.cover} width='50'/></td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.rating}</td>
                            </tr>
                        ))
                    }    
                </tbody>

            </table>
        </div>
    )
}