import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../model/Book';
import { HttpBookService } from '../services/HttpBookService';
import { delay } from '../services/utils';

interface BookListProps{
    
}

interface BookListState{
    books:Book[];
    
}

export class BookList extends React.Component<BookListProps,BookListState,BookListState> {

    constructor(props: BookListProps){
        super(props);

        this.state={
            books:[]
        }
    }

     

    service= new HttpBookService();

    componentDidMount=async()=>{
        //await delay(2000);
        let books=await this.service.getBooks();
        this.setState({books});
    }

    render(){

        if(this.state.books.length===0){
            return <img src='/images/loading.gif' alt='loading'/>
        }

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
                            this.state.books.map( book=>(
                                <tr key={book.isbn}>
                                    <td><img src={`/images/books/${book.isbn}.jpg`} width='50' alt={book.title}/></td>
                                    <td><Link to={`/book/${book.isbn}`}  >{book.title}</Link> </td>
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
}

