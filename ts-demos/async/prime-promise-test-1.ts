import {primePromise} from './primes';


let resultPrinter= (result:number[])=>console.log('total primes', result.length);

let printResult= (min:number,max:number) => (result:number[]) => console.log(`total primes between ${min}-${max}`,result.length);

function testPrimePromise(min:number,max:number){

    primePromise(min,max)
        .then(primes=>console.log(`Total primes between ${min}-${max} is ${primes.length}`))
        .catch(error=>console.log(error));
        
    console.log(`calculating primes between ${min}-${max}`);
}




testPrimePromise(2,50000);
testPrimePromise(2,5000);
testPrimePromise(5000,2);
testPrimePromise(2,15000);


