

//collects all the values passed individually and passes them an an array
function sum(...numbers){
    //console.log('numbers',numbers);
    let result=0;
    for(let number of numbers)    
        result+=number;


    return result;

}

console.log('sum(1,2,3,4)',sum(1,2,3,4));
let values=[1,2,3,4];

let result=sum(values); //what will be the result?

console.log('result',result);

let result2=sum(...values); //... here is a spread operator that extracts all values from an array

console.log('result2',result2);



