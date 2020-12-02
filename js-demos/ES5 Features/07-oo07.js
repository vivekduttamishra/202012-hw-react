
function Person(name,age){

    //let p=new Object(); //object is not created
    //the properties should be attached to
    //an object after creating it
    this.name=name;
    this.age=age;
    this.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    this.move=function(from,to){
        console.log(`${this.name} moves from ${from} to ${to}`);
    }

    this.toString=function(){
        return `Person[name=${this.name}, age=${this.age}]`;
    }

    //return p;
}

let p2=new Person('Shivanshi',14);
p2.eat('Maggi');

let p1=new Object();  //create object
p1.init=Person;  //associate initializer
p1.init('Vivek',100);  //run initializer

console.log('p1',p1);
p1.eat('Lunch');
p1.move('Home','Office');
