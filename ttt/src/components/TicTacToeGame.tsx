import React, { Component } from 'react';
import TicTacToeBoard from './TicTacToeBoard';

let resetStyle = {
    
    color: 'white',
    align: 'left',
    width:'40%',
    marginBottom: '10px'
}



export default class Game extends Component {

    state = {
        next: 'O',
        cells: ['', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    constructor(){
        super({});
        this.onCellClick=this.onCellClick.bind(this);
    }
    onCellClick(cellId: number) {
        //check which value should be placed in current cell
        let current = this.state.next;
        //duplicate the old cell array
        let cells = [...this.state.cells];
        //place appropriate value in appropriate cell
        cells[cellId] = current;
        let next = current === 'O' ? 'X' : 'O';
        this.setState({ cells, next }); //update cells and next fields
    }
   

    resetGame= () => {
        this.setState({
            next: 'O',
            cells: ['', '', '',
                '', '', '',
                '', '', ''
            ]
        });
    }

   
    render() {
        return (
            <div className='container game' style={{ alignItems: 'center center', width: '500px' }}>
                <h1>Tic Tac Toe Game</h1>
                <h2>Next Move: {this.state.next}</h2>
                <button  onClick={this.resetGame}  className='btn btn-danger' style={resetStyle} >Reset</button>

                <TicTacToeBoard                 
                    cells={this.state.cells}
                    onCellClick={this.onCellClick}                
                />

            </div>
        );
    }
};
