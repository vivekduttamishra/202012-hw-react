
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let welcome= React.createElement('h1',    //the element we are creating
                    {
                        className:'heading',
                        name:'Vivek'
                    }, //attributes of the element
                    'Hello React World'    //body of the element
                    );



let root = document.getElementById("root");

//root.innerHTML=welcome; 

//please add react element 'welcome' to the HTML element root
ReactDOM.render(welcome,root);

