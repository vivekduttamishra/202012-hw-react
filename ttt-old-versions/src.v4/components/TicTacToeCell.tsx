import React from 'react';

interface CellProps{

    value:string;

    cellClicked():void;

}

const cell= ({value,cellClicked}:CellProps)=>{

    let cellStyle={
        background: value?'#EEE':'white',
        cursor: value? 'not-allowed':'pointer'
    };

    let handler= value? (()=>console.log('you cant click here')) : cellClicked;
    
    //const disabled= value?true:false;
    const disabled=false;

    return (
        <button onClick={handler}
                style={cellStyle}
                disabled={disabled}
                className='cell'>{value}</button>
    );
};  

export default cell;
