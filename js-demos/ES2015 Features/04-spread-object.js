

let person={
    name:'Vivek',
    email:"vivek@personal.com",
    phone:'939393993'
};


let employee={
    ...person,   //take all property from person
    id:29,       //add additional properties
    salary:1,
    email:'vivek@business.com' //can also replace existing properties
};

console.log('employee',employee);







