
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




let Title=function(props){
    console.log(props);
    return <h1 className={props.classNames}>{props.content}</h1>;
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
        <Title  content='Welcome to ReactJS Application' 
                classNames='heading'
            />
        <MenuBar/>
    </div>
);



let App=()=>( 
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
ReactDOM.render(<App/>,root);   //ReactDOM.render(welcome(),root);



