import React from 'react';
import TicTacToeBoard from './TicTacToeBoard';

let resetStyle={
    background:'black',
    color:'white',
    align:'left',
    marginBottom:'10px'
}


export default ()=>{
    

    return (
        <div className='container game' style={{alignItems:'center center', width:'500px'}}>
            <h1>Tic Tac Toe Game</h1>
            <h2>Next Move: O</h2>
            <button style={resetStyle} >Reset</button>
            
            <TicTacToeBoard/>
            
        </div>
    );
};
