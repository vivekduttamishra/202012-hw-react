
namespace demo07{

   //we can define our types

   type Name={
       firstName:string, 
       middleName?:string, 
       lastName:string
   }

   type Person={
        id:number|string;
        name:string|Name; //name could be simple string or Name type
        email:string|null;
        phone?:string; //? makes it optional field

   }

   let p1:Person={
       name:'Vivek Dutta Mishra',
       email:'vivek@example.com',
       id:14
   } ;

   let p2: Person={
       id:'sh22',
       name:{firstName:'Shivanshi',lastName:'Mishra'},
       email:null,
       phone:'9949949'
   };

   let p3: Person={
    id:'sh22',
    name:{
        firstName:'Shweta',
        middleName:'Dutta',
        lastName:'Mishra'
    },
    email:null,
    phone:'9949949'
};
   

}