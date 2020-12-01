
let numbers=[2,3,5,2,6]; //array is an object in javascript

console.log('original list', numbers,numbers.length);

numbers.push(8);
numbers.push(11);

console.log('after push',numbers,numbers.length);

//to remove few items from the list,
numbers.splice(2,3);   //delete 5,2,6

console.log('after splice', numbers,numbers.length);