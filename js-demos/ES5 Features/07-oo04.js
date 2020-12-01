
function showPerson( msg){
    console.log(msg);
    console.log('name',this.name); //this referes to the owner object
    console.log('age',this.age);    //always refers to current context (left side of .)
    console.log();
}
var name='Sanjay';
var age=29;
showPerson('showPerson()');

//creating an object is javascript 
let p1=new Object(); 
p1.name='Vivek';
p1.age=100;
p1.show=showPerson; //we can assign methods just like values
p1.show('p1.show()');
let p2={name:'Shvianshi',age:14, show:showPerson};
p2.show('p2.show()'); //which values will it show?





