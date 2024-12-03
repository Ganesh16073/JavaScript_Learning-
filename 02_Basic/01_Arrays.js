const myarr=[0,1,2,3,4,true,"hii",6]
// for(let i=0;i<myarr.length;i++)
// {
//     console.log(myarr[i])
// }

const hero=["Benten","SuperMan"]
let all=hero.concat(myarr)
console.log(all) //[ 'Benten', 'SuperMan', 0, 1, 2, 3, 4, true, 'hii', 6 ]

all.push("newHero")
const get=all.pop()
console.log(get)
console.log(all)
console.log()
console.log(all)
console.log(typeof all)

const spread=[...myarr, ...hero]
console.log(spread) // alsowork as concact

console.log()
const anotherarray=[1,2,3,[4,5,6],7,[8,9,[10,11],12]]

const real_anotherarray=anotherarray.flat(Infinity)
console.log(real_anotherarray)

console.log()
console.log(Array.isArray("Hello")) // return true or false 
console.log(Array.from("Hello123")) // seprate every characer

console.log()
console.log()
let arr1=[0,1,2,3,4,5]

console.log("original array =>> "+arr1)
let newarr=arr1.slice(1,3) // first index to lastindex-1
console.log("slice array => "+newarr) 
console.log("original array =>> "+arr1) //slice does not affect original array. it just give copy
console.log()
let newarrsplice=arr1.splice(1,3) // satart and offset
console.log("Splice array =>"+newarrsplice) // splice return the subarray and delete from origial array
console.log("original array =>> "+arr1)




