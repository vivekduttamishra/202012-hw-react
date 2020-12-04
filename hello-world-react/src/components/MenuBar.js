import React from 'react';  //required if your code has JSX in it

let menuBar_OldVersion_NotInUse=function(){
    return (<ul className='nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>);
}


class MenuBar extends React.Component{

    render(){
        return (<ul className='nav'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/help'>Help</a></li>
            </ul>);
    }
}

export default MenuBar;