

Array.prototype.showAll=function(message){
    console.log(message);
    for(let item of this)
        console.log(item.toString());

    console.log();
}