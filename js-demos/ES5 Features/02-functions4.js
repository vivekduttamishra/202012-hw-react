
function sum(value1,value2){    //sum() is added to window/global object
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}

console.log('typeof(sum)',typeof(sum)); //a function is just like another javascript object

//plus is another global name for sum
let plus=sum; //A function can be referred as an object

console.log('plus(1,2,3,4)',plus(1,2,3,4));  //function reference is called just like a functions


//alternative (preferred) way of writing a functions

let minus= function sub(x,y){   //sub is assgined to global minus. but sub is never added to global context
    return x-y;
}

console.log('typeof(minus)',typeof(minus));


console.log('minus(7,4)',minus(7,4));


//sub was directly assigned to minus and never added to global scope
console.log('typeof(sub)',typeof(sub));

//do we need 'sub' in our code?

//anonymous function object 

let multiply= function(x,y){  //the function doesn't need a name. just a reference
    return x*y;
};

console.log('multiply(2,3)',multiply(2,3));











