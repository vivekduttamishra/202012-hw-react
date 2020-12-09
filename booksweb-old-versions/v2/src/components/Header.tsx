import React from 'react';

export interface HeaderProps {
    title: String;
}
let style={
    backgroundColor:'red'
};
export const Header = ({title}: HeaderProps) => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={style}>
            <a className="navbar-brand" href="#">
            <i className="fa fa-book"></i>{title}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-list"></i>Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-plus"></i> Book</a>
                    </li>
                </ul>
                <ul className="navbar-nav ">                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}




