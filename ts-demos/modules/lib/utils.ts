

export function sum(...numbers:number[]){
    let result=0;
    for(let number of numbers){
        result+=number;
    }

    return result;
}

export function average(...numbers:number[]){
    return sum(...numbers)/numbers.length;
}