
namespace demo04{

   let person={
       name:'Vivek',
       email:'vivek@example.com'
   } ;

   console.log('person',person);

    //what is the type of person?
    //person is a object of special type that has a name and an email
    //{name:string, email:string}

    //person type has no phone property
    //person.phone='93939393';

    let person2:any={
        name:'Shivanshi',
        email:'shivanshi@example.com'
    } ;

    person2.phone='93939393';
    console.log('person2',person2);




}