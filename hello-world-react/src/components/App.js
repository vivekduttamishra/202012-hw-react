import React from 'react';  //required if your code has JSX in it
import AppHeader from './AppHeader';

let App=()=>( 
    <div>
        <AppHeader title='My React App' />
        <div className='main'>
            <p>Welcome to the React Application</p>
            <p>Hope you like this!</p>
        </div>
    </div>
    ) ;

export default App;