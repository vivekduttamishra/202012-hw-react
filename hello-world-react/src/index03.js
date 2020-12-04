
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let title= React.createElement('h1',    //the element we are creating
                    {
                        className:'heading',
                        name:'Vivek'
                    }, //attributes of the element
                    'Hello React World'    //body of the element
                    );

let body=React.createElement('p',
                        {style:{color:'blue'}},
                        "Welcome to React Application" );


let welcome=React.createElement(
                                'div',  //name of the element
                                null,   //no special attribute
                                title,body  //children of the element
                                );

let root = document.getElementById("root");

//root.innerHTML=welcome; 

//please add react element 'welcome' to the HTML element root
ReactDOM.render(welcome,root);

