
namespace demo08{

   //we can define our types
   type Name={
       firstName:string, 
       middleName?:string, 
       lastName:string
   }

   class Person{

        private id:number|string;
        private name:string|Name;
        private email:string|null;
        private phone?:string;

        constructor(id:number|string, name:string|Name, email:string|null, phone?:string){
            this.id=id;
            this.name=name;
            this.phone=phone;
            this.email=email;
        }

        toString():string{
            let name=this.name;
            if(typeof(this.name)!=="string"){ 
                let n=<Name>this.name;
                name=`${n.firstName} ${n.middleName??''} ${n.lastName}`;
            }

            return `Person[id=${this.id}, name=${name}, email=${this.email??''}, phone=${this.phone??''}]`;

        }

   }


   let p1=new Person(1,"Vivek Dutta Mishra","vivek@example.com");

   let p2=new Person('sh2',{firstName:"Shivanshi", lastName:"Mishra"},null, "9939393");

   console.log(`p1=${p1}`);
   console.log(`p2=${p2}`);



   
   

}