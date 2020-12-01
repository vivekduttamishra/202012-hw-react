
function showPerson(p, msg){
    console.log(msg);
    console.log('name',p.name);
    console.log('age',p.age);    
    console.log();
}


//creating an object is javascript 
let p1=new Object(); 
//javascript objects are like dictionaries 
//there properties or fields are like key in a dictionary

p1['name']='Vivek';  //same as p1.name='Vivek;
p1.age=100;       //same as p1["age"]=100

console.log('p1.name',p1.name,p1["name"]);
console.log('p1["age"]',p1["age"],p1.age);



