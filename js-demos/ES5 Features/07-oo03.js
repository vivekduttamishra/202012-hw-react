
function showPerson(p, msg){
    console.log(msg);
    console.log('name',p.name);
    console.log('age',p.age);    
    console.log();
}


//creating an object is javascript 
let p1=new Object(); 

p1.name='Vivek';
p1.age=100;

p1.show=showPerson; //we can assign methods just like values



p1.show(p1,'calling object method');

let p2={name:'Shvianshi',age:14};

p1.show(p2,'p1.show(p2)'); //which values will it show?

//it shows value of arugment passed p2
//what is the role of p1?
// p1 has no real job, its just notation similar other oo language



