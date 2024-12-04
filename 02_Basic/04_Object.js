const tinderUser=new Object() // singleton Object
const tindern={} // non singleton Object
console.log(tinderUser) //{}
tinderUser.id=12
tinderUser.user="Omkar"
tinderUser.isLoggedin=false
console.log(tinderUser)

const reguralUser={
    email:"ganesh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ganesh",
            lastname:"Kulkarni"
        }
    }
}
console.log(reguralUser)
console.log(reguralUser.fullname) // access inner object

console.log()
console.log(reguralUser.fullname?.userfullname.firstname) //? is used to if present return or return undifined // Mostly used in Rest API
console.log()
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2} // add as objects but not seprate element
console.log(obj3) 

const objj=Object.assign({},obj1,obj2) // (target{},source1....)
console.log()
console.log(objj)
console.log()
const obj4={...obj1,...obj2} // using spread operator
console.log(obj4)

console.log()
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id")) // return boolean if key is present or not



