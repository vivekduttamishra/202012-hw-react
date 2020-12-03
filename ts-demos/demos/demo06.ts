
namespace demo06{

   //we can define our types

   type Person={
        id:number|string;
        name:string;
        email:string|null;
        phone?:string; //? makes it optional field

   }

   let p1:Person={
       name:'Vivek',
       email:'vivek@example.com',
       id:14
   } ;



   let p2: Person={
       id:'sh22',
       name:'Shivanshi',
       email:null,
       phone:'9949949'
   };

   

}