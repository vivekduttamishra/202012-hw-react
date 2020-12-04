import React from 'react';  //required if your code has JSX in it

let Title=function(props){
    console.log(props);
    return <h1 className={props.classNames}>{props.content}</h1>;
}

export default Title;