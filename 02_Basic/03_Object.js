// Object Literals

const mykey=Symbol("mykey1")


const jsuser={ 
    name:"ganesh", // key and values // key is ByDefault String
    age:21,
    [mykey]:"mykeyfrom symnol", // declare symbols 
    "location":"pune", // if we declare key in string then we need to access through string only
    email:"ganeshkulkarni4237@gamil.com",
    isLoggedin:true,
    lastLogin:["monday","tuesday"],
    greeting:"Hello"
}

console.log(jsuser.email) // two wayd to access literals
console.log(jsuser["email"])
console.log(jsuser["location"])
console.log(jsuser[mykey])
console.log(typeof jsuser[mykey])
//Object.freeze(jsuser) // use to make data mutable
jsuser.age=22
console.log(jsuser)

jsuser.greeting=function()
{
    console.log("Good Moring JsUser")
}
console.log(jsuser.greeting) // does not print inner data
console.log(jsuser.greeting()) // print inner data