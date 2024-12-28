const chai=
{
    name:"ginger chai",
    price:100,
    isAvaliable:true
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
chai.name="ganesh"
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));