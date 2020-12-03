
namespace demo05{

   //we can define our types

   type Person={
        id:number;
        name:string;
        email:string;
        phone?:string; //? makes it optional field

   }

   let p1:Person={
       name:'Vivek',
       email:'vivek@example.com',
       id:14
   } ;

   let p2: Person={
       id:11,
       name:'Shivanshi',
       email:'shivanshi@example.com',
       phone:'9949949'
   };

   

}