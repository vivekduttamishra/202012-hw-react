import React from 'react';  //required if your code has JSX in it
import Title from './Title'
import MenuBar from './MenuBar';


let AppHeader= ({title}) =>(
    <div className='header'>
        <Title  content={title} 
                classNames='heading'
            />
        <MenuBar/>
    </div>
);

export default AppHeader;