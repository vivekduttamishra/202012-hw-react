
function Person(name,age){

    //let p=new Object(); //object is not created
    //the properties should be attached to
    //an object after creating it
    this.name=name;
    this.age=age;
    this.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    //return p;
}

Person.prototype.move=function(from,to){
        console.log(`${this.name} moves from ${from} to ${to}`);
}

Person.prototype.toString=function(){
    return `Person[name=${this.name}, age=${this.age}]`;
}



let p1=new Person('Vivek',100);
console.log(`Person is ${p1}`);
p1.eat('Lunch');
p1.move('Home','Office');

let p2=new Person('Shivanshi',14);
console.log(`Person is ${p2}`);
p2.eat('Maggi');
p1.move('Home','School');