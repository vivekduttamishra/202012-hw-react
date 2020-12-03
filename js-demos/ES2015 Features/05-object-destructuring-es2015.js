

let person={
    name:'Vivek',
    email:"vivek@personal.com",
    phone:'939393993',
    address:'bangalore'
};


let {email,cell} = person; //there is no cell property in person

console.log('email',email);
console.log('cell',cell);  //there is no cell property in the person

let {phone:cellPhone} = person;  //extract phone property of the person in a varilable called cellPhone

console.log('cellPhone',cellPhone);



