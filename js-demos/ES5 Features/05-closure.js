//we can write a function inside another function
//we can return a function from another functions


let outer=function(oparam){

    let olocal=oparam*10;

    let inner=function(iparam){
        result=iparam*oparam;
        console.log(`oparam=${oparam}\tolocal=${olocal}\tiparam=${iparam}\tresult=${result}`);
        return result;
    }

    return inner; //what we return is a function
}

let i1= outer(5) //oparam=5, olocal=50

let i2=outer(100) //oparam=100, olocal=1000

//here outer() function has finished twice each time return a reference to inner function
//since outer() function has completed, what happens to its parameter and local variables oparam and olocal
//Oridinarly since outer() function ends all its local variables and parameters are cleaned
//But since these values are required by i1() and i2(), these values will live on as long as i1 and i2 are alive
//since i1() and i2() are different, oparam and olocal is also different for both of them


i1(100); //oparam 5, olocal=50, ilocal=100, result=500

i2(1) ; //oparam 100, olocal=1000, ilocal=1, result=100




