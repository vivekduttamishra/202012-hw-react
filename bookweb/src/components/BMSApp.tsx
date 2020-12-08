import React, {Component} from 'react'
import { BookList } from './BookList';
import { Footer } from './Footer';
import { Header } from './Header';



export default class BMSApp extends Component{

    render(){
        return (       
            <div className='App'>
                <Header title='Books Web'/>
                <div className='container'>
                    <BookList/>
                </div>
                <Footer/>
            </div>     
       
        );
    }
}
