

export const  isPrime=(value:number)=>{

    if(value<2)
        return false;

    if(value==2)
        return true;

    for(let i=2;i<value;i++)
        if(value%i===0)
            return false;

    return true;

}

export const findPrimes=(min:number,max:number):number[]=>{
    let result:number[]=[];

    for(let i=min;i<max;i++){
        if(isPrime(i))
            result.push(i);        
    }

    return result;
}

interface PrimeCallback{
    (result:number[]):void;
}

export const  findPrimesAsync=(min:number,max:number, callback:PrimeCallback)=>{

    let lo=min;
    let hi= (max-min)<1000? max: lo+1000;  
    let result:number[]= [];

    let id= setInterval(()=>{
        let newResult= findPrimes(lo,hi);
        result=[...result,...newResult];
        lo=hi;
        if(lo>=max){  //we have checked all the value. time to inform client
            //task is over
            clearInterval(id)
            return callback(result);
        }
        let next= hi+1000>max?max:hi+1000;
        lo=hi;
        hi=next;

    },2);
} 


export const  primePromise=(min:number,max:number):Promise<number[]>=>{

    let promise=new Promise<number[]>((resolve,reject)=>{
        let lo=min;
        let hi= (max-min)<1000? max: lo+1000;  
        let result:number[]= [];
    
        let id= setInterval(()=>{
            if(max<min)
                return reject(`Invalid range ${min}-${max}`); //send error

            let newResult= findPrimes(lo,hi);
            result=[...result,...newResult];
            lo=hi;
            if(lo>=max){  //we have checked all the value. time to inform client
                //task is over
                clearInterval(id)
                return resolve(result);
            }
            let next= hi+1000>max?max:hi+1000;
            lo=hi;
            hi=next;
    
        },2);

    });

    return promise;

    
} 