const user={ // object
    username:"Ram",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username}, Welcome to website`);
        console.log("------------------------")
        console.log(this) // print all
        console.log("------------------------^^^")

    }
}
user.welcomeMessage()
user.username="Ajay"
user.welcomeMessage()
console.log(this) // here empty but in brouser Windows object

// function chai()
// {
//     console.log(this);
    
// }

const chai=function(){
    let  username="Ganesh"
    console.log(this.username) // here this is not recognized
    console.log(username)
}
chai()

const chai2=()=>
{
    console.log("From Arrow Function")
}
chai2()
const addTwoNumber=(n1,n2)=>
{
    return n1+n2
}
console.log(addTwoNumber(30,50))

const mulTwoNumber=(n1,n2)=>n1*n2 // also we can use as lambda expersion in java
console.log(mulTwoNumber(5,100))

const subTwoNumber=(n1,n2)=>(n1-n2)
console.log(subTwoNumber(10,5))

const returnObject=()=>({username: "Ganesh",learnig:"JSON, Spring"}) // when we return object we need to passs in brackets()
console.log(returnObject());
