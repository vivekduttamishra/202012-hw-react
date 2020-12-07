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
        let current=this.state.next; 
        let next= current==='O'?'X':'O';
        this.setState({next}); //toggle between O and X
    }

    render = () => {

        return (
            <div className='container'>
                <div className='row'>
                    <Cell value={this.state.cells[0]} cellClicked={() => this.onCellClick(0)} move='X' />
                    <Cell value={this.state.cells[1]} cellClicked={() => this.onCellClick(1)} move='X' />
                    <Cell value={this.state.cells[2]} cellClicked={() => this.onCellClick(2)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={this.state.cells[3]} cellClicked={() => this.onCellClick(0)} move='X' />
                    <Cell value={this.state.cells[4]} cellClicked={() => this.onCellClick(1)} move='X' />
                    <Cell value={this.state.cells[5]} cellClicked={() => this.onCellClick(2)} move='X' />
                </div>
                <div className='row'>
                    <Cell value={this.state.cells[6]} cellClicked={() => this.onCellClick(0)} move='X' />
                    <Cell value={this.state.cells[7]} cellClicked={() => this.onCellClick(1)} move='X' />
                    <Cell value={this.state.cells[8]} cellClicked={() => this.onCellClick(2)} move='X' />
                </div>
                
           </div>
        );
    };

}