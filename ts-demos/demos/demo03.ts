
namespace demo03{

    let a:number=20;  //a is a number that holds 20
    console.log('a',a);

    //you can't assign not-numbers here

    //a='hello'; //not allowed
    //console.log('a',a);

    let b=20;  //b is assigned 20 so it is implicitly a number type
    console.log('b',b);

    //you can't assign any other value here

    //b=true; //not allowed

    let c;  //has default type 'any' => it can hold any value like ordinary javascript object
    c=20;
    console.log('c',c);

    c='hello';

    console.log('c',c);


    let d:any=20; //d can hold anything, currently holding 20 (number)
    console.log('d',d);

    d='hello';

    console.log('c',c);

    


}