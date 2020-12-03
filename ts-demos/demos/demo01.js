"use strict";
function sum(...numbers) {
    let result = 0; //let is a ES2015 feture
    //for-of loop is a ES2015 feature
    for (let number of numbers)
        result += number;
    return result;
}
//ES2015 feature backtick
console.log(`sum(3,4)=> ${sum(3, 4)}`);
console.log(`sum(3,4,5,6)=> ${sum(3, 4, 5, 6)}`);
