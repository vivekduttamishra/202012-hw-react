


// This is directly inject to Array and will be available to all array object
// We don't need to export it now.
Array.prototype.showAll=function(message){
    console.log(message);
    for(let item of this)
        console.log(item.toString());

    console.log();
}


export function sum(...values){
    let result=0;
    for(let value of values)
        result+=value;

    return result;
}

export function average(...values){
    return sum(...values)/values.length;
}

