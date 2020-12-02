

class Person{

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    eat(food){
        console.log(`${this.name} eats ${food}`);
    }

    move(from,to){
        console.log(`${this.name} goes from  ${from} to ${to}`);
    }

    toString(){
        return `Person[name=${this.name}, email=${this.email}]`
    }
}

p=new Person('Vivek','vivek@conceptarchitect.in');

//attached to proptotpye
Person.prototype.sleep=function(){
    console.log(`${this.name} is sleeping`);    
}

//attached to object
p.work=function(as){
    console.log(`${this.name} is working as ${as}`);
}

console.log('p',p);

p.sleep();
p.work('trainer');

let p2=new Person('Shvianshi', 14);
p2.sleep(); //sleep is for every Person
p2.work('student'); //work is not defined for p2



