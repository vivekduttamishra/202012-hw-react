

let person={
    name:'Vivek',
    email:"vivek@personal.com",
    phone:'939393993',
    address:'bangalore'
};

let organization={
    companyName:'Honewell',
    email: 'support@honeywell.com'
}

function sendEmailES5(to, message){

    console.log(`sending ${message} to ${to.email}`);   
}

sendEmailES5(person,'sending message using es5');
sendEmailES5(organization,'sending message using es5');

function sendEmailES2015({email}, message){  //just take the email property of the supplied object

    console.log(`sending ${message} to ${email}`);   
}

sendEmailES2015(person,'sending message using es2015');
sendEmailES2015(organization,'sending message using es2015');




