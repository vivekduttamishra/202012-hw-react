import React from 'react';

let oldcell=(props:any)=>{

    let move='O'; // a  local variable
    function handleClick(){
        console.log('cell clicked');
        move='X';  //react has no way to know,  move value has changed.
    }

    return (
        <button onClick={handleClick}
                className='cell'>{move}</button>
    );
};  

export default class Cell extends React.Component{
    state={
        move:'O'
    }

    handleClick=()=>{
        //state must be changed using setState
        this.setState({move:'X'}); //now react know move has changed
    }

    render(){
        return (<button onClick={this.handleClick}
            className='cell'>{this.state.move}</button>);
    }

}