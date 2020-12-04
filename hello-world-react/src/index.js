
import React from 'react';  //required if your code has JSX in it
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';



let root = document.getElementById("root");

//root.innerHTML=welcome; 

//please add react element 'welcome' to the HTML element root
ReactDOM.render(<App/>,root);   //ReactDOM.render(welcome(),root);



