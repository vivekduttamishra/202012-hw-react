import React from 'react';
import {Book} from '../model/Book';
import {} from 'react-router-dom';
import { HttpBookService } from '../services/HttpBookService';
import { BookInfo } from './BookInfo';
import { NotFound } from './NotFound';

interface BookDetailsState{
    selectedBook?:Book|null;
    isbn:string|null;
    error?:any;
}

export class BookDetails extends React.Component<any,BookDetailsState,BookDetailsState>{

    service= new HttpBookService();
    state={
        selectedBook:null,
        isbn:null,
        error:null
    }

    async componentDidMount(){

        try{
            console.log('params',this.props.match.params);
            let isbn=this.props.match.params.isbn;
            this.setState({isbn});
            let selectedBook=await this.service.getBookByIsbn(isbn);
            this.setState({selectedBook,error:null});
        } catch(error){
            this.setState({error,selectedBook:null})
        }

    }
    

    render(){
        if(this.state.error)
            return (<NotFound/>)
        if(!this.state.selectedBook)
            return (<img src='/images/loading.gif' alt='loading'/>)
        else
            return (<BookInfo book={this.state.selectedBook}/>)
    }

}