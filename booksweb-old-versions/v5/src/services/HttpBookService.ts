
import { Book } from "../model/Book";
import axios from "axios";





export class HttpBookService { 

   
   private baseUrl='http://localhost:3000/api';

    
    async getBooks():Promise<Book[]>{
        
        let url=`${this.baseUrl}/books.json`;
       
        //let response=await fetch(url);
        let response= await axios.get<Book[]>(url);
        
        //console.log('response',response);
        
        //let books=await response.json();
        //console.log('books',books);
        // return books.map((book:any)=>{            
        //     book.price=parseFloat(book.price);
        //     book.pages=parseInt(book.pages);
        //     book.rating=parseFloat(book.rating);
        //     book.releaseDate=new Date(book.releaseDate);
        //     book.votes=parseInt(book.votes);
        //     return book;
        // });

        return response.data;
    }


    


    async getBookByIsbn(isbn: string): Promise<Book|undefined> {
        
        let response=await axios.get(`${this.baseUrl}/books/${isbn}.json`);
        return response.data;
        
    }

    // async addBook(book: Book): Promise<Book|undefined> {
    //     //await delay(1000);
    //     this.books.push(book);
        
    // }

}