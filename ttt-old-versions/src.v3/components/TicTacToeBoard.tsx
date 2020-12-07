import React from 'react';
import Cell from './TicTacToeCell';


let _oldBoard = () => {

    function onCellClick(cellId: number) {
        console.log(`cell ${cellId} clicked`);
    }

    return (
        <div className='container'>
            <div className='row'>
                <Cell cellClicked={() => onCellClick(1)} move='X' />
                <Cell cellClicked={() => onCellClick(2)} move='X' />
                <Cell cellClicked={() => onCellClick(3)} move='X' />

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

export default class Board extends React.Component{

    //state is a predefined namee in React
    //It must be as it is
    state={
        next:'O',
        cells:[   '',  '',   '',
                  '',  '',   '',
                  '',  '',   ''
              ]
    }

    onCellClick(cellId: number) {
        console.log(`cell ${cellId} clicked`);
        
        
        let current= this.state.next; //check which value should be placed in current cell

        //we need to place current value in cells[cellId]
        //don't modify the current cells array
        //duplicate it and make changes
        //let cells= this.state.cells; //get current value of all cells
        
        let cells=[...this.state.cells];  //duplicate the old cell array

        //now modify the new cells array
        cells[cellId]=current; //place appropriate value in appropriate cell




        //toggle value of next between O and X
        let next= current==='O'?'X':'O';

        //update the state
        //it will trigger re-render of every child
        //that depends on one of the changed states.
        this.setState({cells,next}); //update cells and next fields
    }

    render = () => {

        return (
            <div className='container' >
                <div className='row'>
                    <Cell value={this.state.cells[0]} cellClicked={() => this.onCellClick(0)} move='X' />
                    <Cell value={this.state.cells[1]} cellClicked={() => this.onCellClick(1)} move='X' />
                    <Cell value={this.state.cells[2]} cellClicked={() => this.onCellClick(2)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={this.state.cells[3]} cellClicked={() => this.onCellClick(3)} move='X' />
                    <Cell value={this.state.cells[4]} cellClicked={() => this.onCellClick(4)} move='X' />
                    <Cell value={this.state.cells[5]} cellClicked={() => this.onCellClick(5)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={this.state.cells[6]} cellClicked={() => this.onCellClick(6)} move='X' />
                    <Cell value={this.state.cells[7]} cellClicked={() => this.onCellClick(7)} move='X' />
                    <Cell value={this.state.cells[8]} cellClicked={() => this.onCellClick(8)} move='X' />
                </div>
                
           </div>
        );
    };

}