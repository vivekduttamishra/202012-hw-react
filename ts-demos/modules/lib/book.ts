

export default class Book{

    constructor(private title:String, private author:String){

    }

    toString(){
        return `Book[${this.title},${this.author}]`
    }

}