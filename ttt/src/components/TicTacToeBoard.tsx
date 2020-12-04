import React from 'react';
import Cell from './TicTacToeCell';


export default ()=>{

    function onCellClick(cellId:number){
        console.log(`cell ${cellId} clicked`);
    }

    return (
    <div className='container'>
        <div className='row'>
            <Cell />
            <Cell />
            <Cell />
            
        </div>
        <div className='row'>
            <Cell />
            <Cell />
            <Cell />
            
        </div>
        <div className='row'>
            <Cell />
            <Cell />
            <Cell />
            
        </div>
        
        
        
        
    </div>
    );
};