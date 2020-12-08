import {primePromise} from './primes';


let resultPrinter= (result:number[])=>console.log('total primes', result.length);

let printResult= (min:number,max:number) => (result:number[]) => console.log(`total primes between ${min}-${max}`,result.length);

async function testPrimePromise(min:number,max:number){
    try{
        console.log(`calculating primes between ${min}-${max}`);
        let primes=await primePromise(min,max);
        console.log(`Total primes between ${min}-${max} is ${primes.length}`)
    } catch(err){
        console.log(err);
    }
}


let p1=testPrimePromise(2,50000); //returns a promise
let p2=testPrimePromise(2,5000);  //returns a promise
let p3=testPrimePromise(5000,2);  //result a promise
let p4=testPrimePromise(2,15000); //returns a promise


Promise.all([p1,p2,p3,p4]) 
    .then(()=>console.log('all taks are over')); //when all promises are resolved

console.log('please wait...');


