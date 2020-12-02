
function createPerson(name,age){

    let p=new Object(); 
    p.name=name;
    p.age=age;
    p.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    p.move=function(from,to){
        console.log(`${this.name} moves from ${from} to ${to}`);
    }

    p.toString=function(){
        return `Person[name=${this.name}, age=${this.age}]`;
    }

    return p;
}

let fp1=createPerson('Vivek',100);
let fp2=createPerson('Shivanshi',14);

console.log('p1',fp1);

console.log('p2',fp2);


fp1.eat('Lunch');
fp2.eat('Maggi'); 




