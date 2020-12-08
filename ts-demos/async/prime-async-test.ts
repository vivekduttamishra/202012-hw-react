import {findPrimesAsync} from './primes';


let resultPrinter= (result:number[])=>console.log('total primes', result.length);

let printResult= (min:number,max:number) => (result:number[]) => console.log(`total primes between ${min}-${max}`,result.length);


findPrimesAsync(2,50000, printResult(2,50000));

findPrimesAsync(2,5000, printResult(2,5000));

findPrimesAsync(2,15000, printResult(2,15000));

console.log('waiting for results');




