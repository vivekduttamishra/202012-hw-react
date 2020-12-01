
function showPerson(p, msg){
    console.log(msg);
    console.log('name',p.name);
    console.log('age',p.age);    
    console.log();
}


//creating an object is javascript 
let p1=new Object(); 

//now p1 is an object
console.log('typeof(p1)',typeof(p1));

//but it doens't have any defined properties (or behaviors)
showPerson(p1,'showing person after creation');

//we can define them now.

p1.name='Vivek Dutta Mishra';
p1.age=100; 

showPerson(p1,'showing person after setting properties');


//second way to create a javascript object ---> JSON (Javascript Object Notation)

let p2={}  // same as new Object()
p2.name='Shivanshi';
p2.age=14;
showPerson(p2,'showing object created using {}');


let p3={
    name:'Sanjay',  //notice : and not =
    age:49
};  //same as creating object with defined properties


showPerson(p3,'p3 with properties');






