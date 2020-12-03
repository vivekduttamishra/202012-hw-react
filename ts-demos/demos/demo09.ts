
namespace demo09{

   //we can define our interface
   interface Name{
       firstName:string, 
       middleName?:string, 
       lastName:string
   }

    class Person {
        
        constructor(private name:Name){

        }
        get firstName():string{
            return this.name.firstName;
        }
        get lastName():string{
            return this.name.lastName;
        }
        get fullName():string{
            return `${this.name.firstName} ${this.name.middleName??''} ${this.name.lastName}`;
        }

    }     

    let p1=new Person({firstName:'Vivek',lastName:'Mishra'});

    console.log(p1.fullName);

}