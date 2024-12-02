/*
There are two types of Datatype in JS
1) Premitive 
2) NOn-Premitive/ Refrence Type

======== Premitive Type ==========
7 type 
1) String
2) Number
3) Boolean
4) null
5) undifined
6) Symbol  // const id=Symbol('123')
7) BigInt

======== Non- Premitive Type =======
3 Types

1) Array
2) Object
3)Functions

arrray // let data=["apple","Bat"]

Object 
let myObj={
name:"Ganesh",
age:21
}

const myFuction=function()
{
consol.log("Hello Ajay")
}

Is JS is Static or Dynamic

const=10 || true || "String" // it can store any type of data because it is Dynamic

======================================================================================================
======================================================================================================

>>>>>>>>>>>>>>>>>>>>>>>>>MEMORY ALLOCATION<<<<<<<<<<<<<<<<<<<<<<<<<<

There are TwoTypes Memory in JS
1) Stack
2) Heap

Stack ->> Store Primitive type data
Heap  ->> Store Non Primitive Type of Data

*/

// Stack
let myName="Ganesh"
let anotherName=myName // does not point the address and it only retun th output
anotherName="Gaurav"
console.log(myName)
console.log(anotherName)


//Heap
let user={
    name:"Ganesh",
    email:"ganeshkulkarni4237@gmail.com",
    upi:"abc@ybi"
}

let userOne=user
userOne.upi="ganesh@yml"

console.log(user) //in both Object the value is changed because it shared refrence(address) Non-Premitive
console.log(userOne)