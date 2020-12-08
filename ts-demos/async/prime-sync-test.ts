import {findPrimes} from './primes';

let start=new Date();
let p1=findPrimes(1,500000);
let end=new Date();
let p2=findPrimes(1,5000);

console.log('total tiem taken is',end.getMilliseconds()-start.getMilliseconds());
console.log('p1',p1.length);
console.log('p2',p2.length);

