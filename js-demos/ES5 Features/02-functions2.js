
function sum(a,b){
    return a+b;
}

console.log('sum(2,3,4,5,6)',sum(2,3,4,5,6));   //it ignores the extra arguments

console.log('sum(2)',sum(2));  //missing arguments are treated as undefined

//sum(2) --->   sum(2,undefined) --->  return 2+undefined ---> NaN (Not a Number)

//Remeber! the actual number of arguments passed and the formal parameters need not match
//additional arguments if passed are ignored
//if less arguments are passed remaining parameters are treated undefined.

