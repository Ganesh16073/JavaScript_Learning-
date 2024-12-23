function multiplyBy5(num)
{
    return num*5
}

multiplyBy5.power=2
console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // protype means some functionality or behaviour it hase

function createUser(username,score){
    this.username=username
    this.score=score

}

createUser.prototype.increment=function()
{
    this.score+=1;
}
console.log(createUser.prototype);

createUser.prototype.printMe=function()
{
    console.log(`Username is ${this.username} and Score is ${this.score}`);
    
}
const all=new createUser("Ganesh",10)
all.printMe()
// console.log(newVAlue);
Object.prototype.printMe=function() // object Level Prototype
{
    console.log(`Username is ${this.username} and Score is ${this.score}`);
    
}   