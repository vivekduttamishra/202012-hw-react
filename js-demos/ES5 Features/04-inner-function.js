//we can write a function inside another function
//we can return a function from another functions


let f2=function(){

    let f1=function(arg){
        console.log('f1 called with ',arg);
    }

    return f1; //what we return is a function
}


let a=f2();  //a gets a reference to f1()

let b=f2();  //b also gets a reference to f1()

//but they are not same function. they are defined everytime f1 is called
console.log('a===b',a===b);  //a and b are exactly same function object

console.log('typeof(a)',typeof(a));
console.log('typeof(b)',typeof(b));



a('hello');
b('world');




