//we can write a function inside another function
//we can return a function from another functions


let f1=function(arg){
    console.log('f1 called with ',arg);
}

let f2=function(){

    return f1; //what we return is a function
}


let a=f2(); 

let b=f2();

console.log('typeof(a)',typeof(a));
console.log('typeof(b)',typeof(b));

a('hello');
b('world');

console.log('a===b',a===b);  //a and b are exactly same function object


