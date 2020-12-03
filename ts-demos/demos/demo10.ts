
namespace demo10{

   //we can define our interface
   interface Stack<T>{
       push(value:T):void;
       pop():T
       isEmpty():boolean;
       isFull(): boolean;
   }

    class FixedStack<T> implements Stack<T>{
        push(value: T): void {
            throw new Error("Method not implemented.");
        }
        pop(): T {
            throw new Error("Method not implemented.");
        }
        isEmpty(): boolean {
            throw new Error("Method not implemented.");
        }
        isFull(): boolean {
            throw new Error("Method not implemented.");
        }

    }

}