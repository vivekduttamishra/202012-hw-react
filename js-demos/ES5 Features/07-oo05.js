


let p=new Object(); 
p.name='Vivek';
p.age=100;
p.eat=function(food){
    console.log(`${this.name} eats ${food}`);
}

p.move=function(from,to){
    console.log(`${this.name} moves from ${from} to ${to}`);
}

p.toString=function(){
    return `Person[name=${this.name}, age=${this.age}]`;
}


console.log(`Person is ${p}`);




