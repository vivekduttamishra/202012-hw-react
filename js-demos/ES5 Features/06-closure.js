//we can write a function inside another function
//we can return a function from another functions


let multiplierOf=function(number){

    let multiplyBy=function(value){
        return number*value;
    }

    return multiplyBy; //what we return is a function
};


let m19=multiplierOf(19);

let m11=multiplierOf(11);

for(let i=1;i<=5;i++){
    console.log(`m19(${i})`,m19(i),`\tm11(${i})`,m11(i));
}

//how many arguments m19 is taking?
//officially it is taking a single parameter
//but because of closure it is taking two parameters
//first parameter 19 is already available by virtue of closure
//ADVANTAGE ---> You can pass more arguments than what is officially expected or allowed.
