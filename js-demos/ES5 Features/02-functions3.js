
function sum(value1,value2){
    //all parameters passed to a function is stored int a special 'array like' object called
    //arguments
    //console.log('arguments',arguments);
    
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
    
}

console.log('sum(2,3,4,5,6)',sum(2,3,4,5,6));   //it ignores the extra arguments

console.log('sum(2)',sum(2));  //missing arguments are treated as undefined

//sum(2) --->   sum(2,undefined) --->  return 2+undefined ---> NaN (Not a Number)

//Remeber! the actual number of arguments passed and the formal parameters need not match
//additional arguments if passed are ignored
//if less arguments are passed remaining parameters are treated undefined.

