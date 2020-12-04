
import React from 'react';
import ReactDOM from 'react-dom';

let welcome= React.createElement('h1',null,'Hello React World');

let root = document.getElementById("root");

//root.innerHTML=welcome; 

//please add react element 'welcome' to the HTML element root
ReactDOM.render(welcome,root);

