import React from 'react';
import Cell from './TicTacToeCell';


interface BoardProps{
    cells: string[];
    onCellClick(cellId:number):void;
}
    

 const board= (props:BoardProps) => {

        return (
            <div className='container' >
                <div className='row'>
                    <Cell value={props.cells[0]} cellClicked={() => props.onCellClick(0)}  />
                    <Cell value={props.cells[1]} cellClicked={() => props.onCellClick(1)}  />
                    <Cell value={props.cells[2]} cellClicked={() => props.onCellClick(2)}  />
                </div>
                <div className='row'>
                    <Cell value={props.cells[3]} cellClicked={() => props.onCellClick(3)}  />
                    <Cell value={props.cells[4]} cellClicked={() => props.onCellClick(4)}  />
                    <Cell value={props.cells[5]} cellClicked={() => props.onCellClick(5)}  />
                </div>
                <div className='row'>
                    <Cell value={props.cells[6]} cellClicked={() => props.onCellClick(6)}  />
                    <Cell value={props.cells[7]} cellClicked={() => props.onCellClick(7)}  />
                    <Cell value={props.cells[8]} cellClicked={() => props.onCellClick(8)}  />
                </div>
                
           </div>
        );
    };

    export default board;

