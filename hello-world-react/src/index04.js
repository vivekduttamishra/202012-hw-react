
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




let Title=function(){
    return <h1 className='heading'>Hello React</h1>;
}

let MenuBar=function(){
    return (<ul className='nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>);
}

let AppHeader= () =>(
    <div className='header'>
        <Title/>
        <MenuBar/>
    </div>
);



let Welcome=( 
            <div>
                <AppHeader/>
                <div className='main'>
                    <p>Welcome to the React Application</p>
                    <p>Hope you like this!</p>
                </div>
            </div>
            ) ;



let root = document.getElementById("root");

//root.innerHTML=welcome; 

//please add react element 'welcome' to the HTML element root
ReactDOM.render(<Welcome/>,root);   //ReactDOM.render(welcome(),root);



